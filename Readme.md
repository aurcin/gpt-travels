# NextJS & OpenAI - 2024 Edition GPTGenius App Codealong

This repository contains my code for the [NextJS & OpenAI - 2024 Edition](https://www.udemy.com/course/nextjs-open-ai/) course **section 2 - GPTGenius App**.

I've used TypeScript for coding. Note that the folder structure may differ slightly. I've used a local database and [cohere](https://cohere.com/) instead of ChatGPT, and used cohere free trial key tokens with a slightly different question template. The implementation of showing and limiting tokens is not included, even though it is possible in Cohere in a similar manner as showed in course.

Things you might need in your `env.local`:

```dotenv
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=xxx
CLERK_SECRET_KEY=xxx

NEXT_PUBLIC_CLERK_SIGN_IN_URL='/auth/sign-in'
NEXT_PUBLIC_CLERK_SIGN_UP_URL='/auth/sign-up'
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL='/chat'
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL='/chat'

COHERE_API_KEY=xxx

UNSPLASH_API_KEY=xxx
```
