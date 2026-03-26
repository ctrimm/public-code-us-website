import React, { useState } from 'react';

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function ShareButtons({
  url,
  title,
  description,
  size = 'md'
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const sizeClasses = {
    sm: 'btn-am text-sm px-3 py-2',
    md: 'btn-am px-4 py-2',
    lg: 'btn-am px-6 py-3'
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnThreads = () => {
    const text = `${title} ${description ? '\n\n' + description : ''}\n\n${url}`;
    const threadsUrl = `https://www.threads.net/intent/post?text=${encodeURIComponent(text)}`;
    window.open(threadsUrl, '_blank', 'width=550,height=420');
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=550,height=420');
  };

  const shareViaEmail = () => {
    const subject = `Check out: ${title}`;
    const body = `${description || title}\n\n${url}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const shareOnLinkedin = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, '_blank', 'width=550,height=420');
  };

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Share this page">
      <button
        onClick={shareOnThreads}
        className={`${sizeClasses[size]} btn-am-primary`}
        aria-label="Share on Threads (opens in new window)"
      >
        Threads
      </button>

      <button
        onClick={shareOnFacebook}
        className={`${sizeClasses[size]} btn-am-primary`}
        aria-label="Share on Facebook (opens in new window)"
      >
        Facebook
      </button>

      <button
        onClick={shareViaEmail}
        className={`${sizeClasses[size]} btn-am-secondary`}
        aria-label="Share via email"
      >
        Email
      </button>

      <button
        onClick={shareOnLinkedin}
        className={`${sizeClasses[size]} btn-am-secondary`}
        aria-label="Share on LinkedIn (opens in new window)"
      >
        LinkedIn
      </button>

      <button
        onClick={copyToClipboard}
        className={`${sizeClasses[size]} btn-am-white`}
        aria-label={copied ? 'Link copied to clipboard' : 'Copy link to clipboard'}
      >
        {copied ? 'Copied!' : 'Copy Link'}
      </button>

      <div aria-live="polite" className="sr-only">
        {copied && <span>Link copied to clipboard</span>}
      </div>
    </div>
  );
}
