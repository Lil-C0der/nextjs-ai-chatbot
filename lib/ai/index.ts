import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { customMiddleware } from './custom-middleware';
import { registry } from './model-provider';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: registry.languageModel(apiIdentifier),
    middleware: customMiddleware,
  });
};
