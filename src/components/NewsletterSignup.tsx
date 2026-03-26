import React, { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'inline' | 'card';
  source?: string;
}

export function NewsletterSignup({
  variant = 'inline',
  source = 'homepage'
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to subscribe');
      }

      setSuccess(true);
      setEmail('');
      setName('');
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'card') {
    return (
      <div className="border-4 border-am-dark bg-am-blue p-8 rounded-none">
        <h3 className="text-2xl font-bold text-am-dark mb-4">
          Stay Updated
        </h3>
        <p className="font-bold text-am-dark mb-6">
          Get campaign updates, organizing tips, and ballot news straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3" aria-label="Newsletter signup">
          <div aria-live="assertive">
            {error && (
              <div className="border-2 border-red-600 bg-red-50 p-3 text-red-900 text-sm font-bold" role="alert">
                {error}
              </div>
            )}
          </div>

          <div aria-live="polite">
            {success && (
              <div className="border-2 border-green-600 bg-green-50 p-3 text-green-900 text-sm font-bold" role="status">
                Check your email to confirm!
              </div>
            )}
          </div>

          <div>
            <label htmlFor={`newsletter-name-${source}`} className="sr-only">Your name (optional)</label>
            <input
              id={`newsletter-name-${source}`}
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-am w-full"
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor={`newsletter-email-${source}`} className="sr-only">Email address</label>
            <input
              id={`newsletter-email-${source}`}
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-am w-full"
              autoComplete="email"
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            aria-disabled={loading}
            className="btn-am btn-am-primary w-full font-bold uppercase"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        <p className="text-xs font-bold text-gray-600 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    );
  }

  // Inline variant
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" aria-label="Newsletter signup">
      <div className="flex-1">
        <label htmlFor={`newsletter-inline-${source}`} className="sr-only">Email address</label>
        <input
          id={`newsletter-inline-${source}`}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input-am w-full"
          autoComplete="email"
          aria-required="true"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        aria-disabled={loading}
        className="btn-am btn-am-primary whitespace-nowrap"
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>

      <div aria-live="polite" className="sr-only">
        {success && <span role="status">Successfully subscribed. Check your email!</span>}
      </div>
      <div aria-live="assertive" className="sr-only">
        {error && <span role="alert">{error}</span>}
      </div>
      {success && <p className="text-green-700 font-bold text-sm">Check your email!</p>}
      {error && <p className="text-red-700 font-bold text-sm">{error}</p>}
    </form>
  );
}
