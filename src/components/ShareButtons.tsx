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
    sm: 'btn-nb text-sm px-3 py-2',
    md: 'btn-nb px-4 py-2',
    lg: 'btn-nb px-6 py-3'
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnThreads = () => {
    const text = `${title} ${description ? '\n\n' + description : ''}\n\n${url}`;
    // Threads uses a simple share URL (doesn't have native tweet intent like Twitter)
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
    <div className="flex flex-wrap gap-2">
      <button
        onClick={shareOnThreads}
        className={`${sizeClasses[size]} btn-nb-primary`}
        title="Share on Threads"
      >
        @ Threads
      </button>

      <button
        onClick={shareOnFacebook}
        className={`${sizeClasses[size]} btn-nb-primary`}
        title="Share on Facebook"
      >
        f Share
      </button>

      <button
        onClick={shareViaEmail}
        className={`${sizeClasses[size]} btn-nb-secondary`}
        title="Share via Email"
      >
        ✉️ Email
      </button>

      <button
        onClick={shareOnLinkedin}
        className={`${sizeClasses[size]} btn-nb-secondary`}
        title="Share on LinkedIn"
      >
        in Share
      </button>

      <button
        onClick={copyToClipboard}
        className={`${sizeClasses[size]} btn-nb-yellow`}
        title="Copy link"
      >
        {copied ? '✓ Copied!' : '🔗 Copy'}
      </button>
    </div>
  );
}
