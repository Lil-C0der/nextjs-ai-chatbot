import { createOpenAI } from '@ai-sdk/openai';
import { experimental_createProviderRegistry as createProviderRegistry } from 'ai';

export const PROVIDER_ID = {
  ARK: 'ark',
  DEEPSEEK: 'deepseek',
};

const ark = createOpenAI({
  apiKey: process.env.ARK_API_KEY,
  baseURL: process.env.ARK_API_BASE_URL,
});

const deepseek = createOpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: process.env.DEEPSEEK_API_BASE_URL,
});

export const registry = createProviderRegistry({
  [PROVIDER_ID.ARK]: ark,
  [PROVIDER_ID.DEEPSEEK]: deepseek,
});
