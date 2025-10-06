// app/about/page.tsx
import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col items-center justify-start p-8">
      {/* Page title */}
      <h1 className="text-4xl font-bold text-[#4F1C51] mb-6">About OpenShelf</h1>

      {/* Description */}
      <p className="text-lg text-[#333] max-w-3xl text-center mb-6">
        Welcome to <span className="font-semibold text-[#543310]">OpenShelf</span> — your online hub for exploring books of all genres. 
        Our mission is to make discovering your next favorite book easy and enjoyable.
      </p>

      {/* Features / Why choose us */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2 text-[#4F1C51]">Wide Collection</h2>
          <p>Explore thousands of books from different genres and categories.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2 text-[#4F1C51]">Easy Navigation</h2>
          <p>Find books quickly using our dynamic navigation and category system.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2 text-[#4F1C51]">Regular Updates</h2>
          <p>Stay up-to-date with new releases, trending books, and exclusive collections.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2 text-[#4F1C51]">Community Driven</h2>
          <p>Join our community of book lovers and share your reading experiences.</p>
        </div>
      </div>
    </div>
  );
}
