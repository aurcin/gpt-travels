'use client';

import { useState } from 'react';

export default function Chat() {
  const [text, setText] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(text);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setText(e.target.value);
  }

  return (
    <div className='min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]'>
      <div>
        <h2 className='text-5xl'>messages</h2>
      </div>
      <form onSubmit={handleSubmit} className='max-w-4xl pt-12'>
        <div className='join w-full'>
          <input
            type='text'
            placeholder='Message GPT Travels'
            className='input input-bordered join-item w-full'
            value={text}
            required
            onChange={handleInputChange}
          />
          <button className='btn btn-primary join-item' type='submit'>
            Ask a question
          </button>
        </div>
      </form>
    </div>
  );
}
