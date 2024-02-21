'use client';

import { generateChatResponse } from '@/actions/chat';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { Message } from '@/types/chat';

export default function Chat() {
  const [text, setText] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversationId, setConversationId] = useState(
    Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(2, 10)
  );

  const { mutate } = useMutation({
    mutationFn: (message: string) =>
      generateChatResponse(message, conversationId),
    onSuccess: data => {
      if (!data) {
        toast.error('Something went wrong');
        return;
      }

      const query: Message = {
        role: 'CHATBOT',
        message: data,
      };
      setMessages(prev => {
        return [...prev, query];
      });
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const query: Message = {
      role: 'USER',
      message: text,
    };

    mutate(text);
    setMessages(prev => {
      return [...prev, query];
    });
    setText('');
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
