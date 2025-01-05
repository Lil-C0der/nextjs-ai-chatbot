// import { openai } from '@ai-sdk/openai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { ark } from './model-provider';
import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  // const provider = openai;
  console.log('apiIdentifier', apiIdentifier);
  return wrapLanguageModel({
    model: ark(apiIdentifier),
    middleware: customMiddleware,
  });
};
