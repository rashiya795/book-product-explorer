// app/contact/page.tsx
import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9F9F9] p-8">
      <h1 className="text-4xl font-bold text-[#4F1C51] mb-4">Contact Us</h1>
      <p className="text-lg text-[#333] max-w-md text-center">
        Have questions or suggestions? Reach out to us at:
      </p>
      <p className="text-lg text-[#4F1C51] font-semibold mt-2">contact@openshelf.com</p>
    </div>
  );
}
