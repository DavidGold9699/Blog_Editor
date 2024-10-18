// components/WaitlistForm.js
'use client'
import React, { useState } from 'react';

const WaitlistForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Question 1:', question1);
    console.log('Question 2:', question2);
    console.log('Question 3:', question3);
  };

  return (
    <div className="max-w-md p-6 mx-auto my-8 shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-white">Join Our Waitlist</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-200">Name</label>
          <input type="text" id="name" className="block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-200">Email</label>
          <input type="email" id="email" className="block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-200">Questions</label>
          <div className="space-y-1">
            <div className="flex items-center">
              <input type="checkbox" id="question1" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" checked={question1} onChange={(e) => setQuestion1(e.target.checked)} />
              <label htmlFor="question1" className="block ml-2 text-sm text-gray-200">Question 1</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="question2" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" checked={question2} onChange={(e) => setQuestion2(e.target.checked)} />
              <label htmlFor="question2" className="block ml-2 text-sm text-gray-200">Question 2</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="question3" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" checked={question3} onChange={(e) => setQuestion3(e.target.checked)} />
              <label htmlFor="question3" className="block ml-2 text-sm text-gray-200">Question 3</label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Join Waitlist
          </button>
        </div>
      </form>
    </div>
  );
};

export default WaitlistForm;
