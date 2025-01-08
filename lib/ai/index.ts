import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { customMiddleware } from './custom-middleware';
import { PROVIDER_ID, registry } from './model-provider';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: registry.languageModel(apiIdentifier),
    middleware: customMiddleware,
  });
};

export const defaultEmbeddingModel = registry.textEmbeddingModel(`${PROVIDER_ID.ARK}:ep-20250109012013-rjzvh`);
