import { createOpenAI } from '@ai-sdk/openai';
import { experimental_customProvider as customProvider } from 'ai';

export const ark = createOpenAI({
  apiKey: process.env.ARK_API_KEY,
  baseURL: process.env.ARK_API_BASE_URL,
});

// export const doubaoModels = customProvider({
//   languageModels: {
//     'doubao-pro-4k': ark('ep-20241229003242-f4sf8'),
//     'doubao-pro-32k': ark('ep-20241103185419-vl2xk'),
//     'doubao-pro-128k': ark('doubao-pro-128k'),
//   },
// });
