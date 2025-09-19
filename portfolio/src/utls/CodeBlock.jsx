import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiCopy, FiCheck } from 'react-icons/fi';

const CodeBlock = ({ code, language = 'cpp' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="relative w-full h-full bg-[#0f0f0f] border border-[#3a0e58] rounded-xl p-4 shadow-lg overflow-hidden">
      <button
        onClick={handleCopy}
        className="absolute top-3 cursor-pointer right-3 bg-[#3a0e58] hover:bg-[#5a148b] text-white px-3 py-1 rounded flex items-center transition duration-200 z-10"
      >
        {copied ? (
          <>
            <FiCheck className="mr-1" />
            Copied!
          </>
        ) : (
          <>
            <FiCopy className="mr-1" />
            Copy
          </>
        )}
      </button>
      <div className="w-full overflow-hidden pt-10  leading-[1.6] text-xl">
        <SyntaxHighlighter
          language={language}
          style={dracula}
          customStyle={{
            backgroundColor: '#0f0f0f',
            
            borderRadius: '0.5em',
            margin: 0,
            width: '100%',
            overflowX: 'hidden', 
          }}
          wrapLines
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
