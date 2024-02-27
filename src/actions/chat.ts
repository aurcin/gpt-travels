'use server';

import { cohere } from '@/utils/ai-client';

export async function generateChatResponse(
  message: string,
  conversationId: string
) {
  try {
    const response = await cohere.chat({
      message,
      conversationId,
      temperature: 0,
    });

    return response.text;
  } catch (error) {
    return null;
  }
}

// response_id: '537c56a8-b5a5-4571-9fa6-2c98936ebbaf',
// text: 'Yes, I am!' ,
// generationId: '22b6cab0-9d33-418d-a953-46be2b6b4912',
// finish_reason: 'COMPLETE',
// token_count: {
//   prompt_tokens: 68,
//   response_tokens: 542,
//   total_tokens: 610,
//   billed_tokens: 599
// }
