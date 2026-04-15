import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface MessageCopyProps {
  representativeName: string;
  stateName: string;
  role?: 'Senator' | 'Representative';
}

export function MessageCopy({ representativeName, stateName, role = 'Senator' }: MessageCopyProps) {
  const [copied, setCopied] = useState(false);

  const message = `Dear ${role} ${representativeName},

I am a resident of ${stateName} and I'm writing to urge your support for "Public Code" policies. 

When tax money is used to build software, that software should be open source. This ensures transparency, saves taxpayer money, and promotes innovation by allowing other jurisdictions to reuse and improve the code.

I would appreciate hearing your position on this issue and whether you will support public code initiatives in the future.

Sincerely,
[Your Name]
[Your Address]`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card-am bg-am-light border-4 border-am-dark p-6 mt-8 h-full flex flex-col">
      <h4 className="text-xl font-bold text-am-dark mb-4">
        Advocacy Message for ${role === 'Senator' ? 'Senator' : 'Rep.'} {representativeName}
      </h4>
      <div className="relative">
        <div className="bg-am-white border-2 border-am-dark p-4 font-bold text-am-dark whitespace-pre-wrap text-sm mb-4 max-h-60 overflow-y-auto">
          {message}
        </div>
        <button
          onClick={copyToClipboard}
          className={`btn-am ${copied ? 'bg-am-red text-am-white' : 'btn-am-white'} flex items-center gap-2 transition-colors`}
          aria-label={copied ? 'Message copied' : 'Copy message text'}
        >
          {copied ? (
            <>
              <Check size={18} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={18} />
              Copy Message
            </>
          )}
        </button>
        <div aria-live="polite" className="sr-only">
          {copied && <span>Message copied to clipboard</span>}
        </div>
      </div>
      <p className="text-xs font-bold text-am-dark mt-4 uppercase tracking-wider">
        💡 Tip: Paste this into the official contact form
      </p>
    </div>
  );
}
