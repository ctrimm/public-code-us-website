import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  state: string;
  zip: string;
  message: string;
  wantsUpdates: boolean;
}

interface SubmitResponse {
  success: boolean;
  message?: string;
  error?: string;
  totalSignatures?: number;
}

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
  'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
  'District of Columbia'
];

export function PetitionForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    state: '',
    zip: '',
    message: '',
    wantsUpdates: true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState<SubmitResponse | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return 'Please enter your full name';
    if (!formData.email.trim()) return 'Please enter your email address';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email address';
    if (!formData.state) return 'Please select your state';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/sign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result: SubmitResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit signature');
      }

      setSuccess(true);
      setSuccessMessage(result);
      setFormData({
        name: '',
        email: '',
        state: '',
        zip: '',
        message: '',
        wantsUpdates: true,
      });

      // Trigger confetti
      if (typeof window !== 'undefined' && (window as any).confetti) {
        (window as any).confetti();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (success && successMessage) {
    return (
      <div className="text-center py-12 px-4" role="status" aria-live="polite">
        <div className="text-6xl mb-6" aria-hidden="true">🎉</div>
        <h2 className="text-4xl font-bold text-am-red mb-4">Thank You!</h2>
        <p className="text-lg font-bold text-am-dark mb-4">
          Your signature has been added to the petition.
        </p>
        <p className="text-2xl font-bold text-am-light-blue mb-8">
          {successMessage.totalSignatures?.toLocaleString()} Signatures
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="btn-am btn-am-primary"
        >
          Sign Again or Share
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto px-4">
      <div aria-live="assertive">
        {error && (
          <div className="border-4 border-red-600 bg-red-100 text-red-900 p-4 font-bold" role="alert">
            {error}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="name" className="block font-bold text-am-dark text-sm mb-2">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="John Smith"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-am w-full"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-bold text-am-dark text-sm mb-2">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-am w-full"
        />
      </div>

      <div>
        <label htmlFor="state" className="block font-bold text-am-dark text-sm mb-2">
          State *
        </label>
        <select
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
          className="input-am w-full"
        >
          <option value="">Select Your State</option>
          {US_STATES.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="zip" className="block font-bold text-am-dark text-sm mb-2">
          ZIP Code (Optional)
        </label>
        <input
          id="zip"
          name="zip"
          type="text"
          placeholder="12345"
          value={formData.zip}
          onChange={handleChange}
          className="input-am w-full"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-bold text-am-dark text-sm mb-2">
          Your Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Why does this matter to you? (Optional)"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="input-am w-full"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          id="updates"
          name="wantsUpdates"
          type="checkbox"
          checked={formData.wantsUpdates}
          onChange={handleChange}
          className="w-5 h-5 border-2 border-am-dark cursor-pointer"
        />
        <label htmlFor="updates" className="font-bold text-am-dark cursor-pointer">
          Send me updates about this campaign
        </label>
      </div>

      <p className="text-xs font-bold text-gray-600">
        By signing, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.
        We'll never share your information.
      </p>

      <button
        type="submit"
        disabled={loading}
        className="btn-am btn-am-primary w-full text-center font-bold uppercase"
      >
        {loading ? '⏳ Submitting...' : '✊ Sign the Petition'}
      </button>
    </form>
  );
}
