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
      <div className="border-4 border-nb-dark bg-nb-cyan p-8 rounded-none">
        <h3 className="text-2xl font-black uppercase italic text-nb-dark mb-4">
          Stay Updated
        </h3>
        <p className="font-bold text-nb-dark mb-6">
          Get campaign updates, organizing tips, and ballot news straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          {error && (
            <div className="border-2 border-red-600 bg-red-50 p-3 text-red-900 text-sm font-bold">
              {error}
            </div>
          )}

          {success && (
            <div className="border-2 border-green-600 bg-green-50 p-3 text-green-900 text-sm font-bold">
              ✓ Check your email to confirm!
            </div>
          )}

          <input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-nb w-full"
          />

          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-nb w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn-nb btn-nb-primary w-full font-black uppercase"
          >
            {loading ? '⏳ Subscribing...' : '📧 Subscribe'}
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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="input-nb flex-1"
      />

      <button
        type="submit"
        disabled={loading}
        className="btn-nb btn-nb-primary whitespace-nowrap"
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>

      {success && <p className="text-green-600 font-bold text-sm">✓ Check your email!</p>}
      {error && <p className="text-red-600 font-bold text-sm">{error}</p>}
    </form>
  );
}
