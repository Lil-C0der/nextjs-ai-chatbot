// Define your models here.

import { PROVIDER_ID } from './model-provider';

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
  /**
   * @default true
   */
  supportToolCalling?: boolean;
}

export const models: Array<Model> = [
  // {
  //   id: 'gpt-4o-mini',
  //   label: 'GPT 4o mini',
  //   apiIdentifier: 'openai:gpt-4o-mini',
  //   description: 'Small model for fast, lightweight tasks',
  // },
  // {
  //   id: 'gpt-4o',
  //   label: 'GPT 4o',
  //   apiIdentifier: 'openai:gpt-4o',
  //   description: 'For complex, multi-step tasks',
  // },
  {
    id: 'ep-20241229003242-f4sf8',
    label: 'Doubao-pro-4k',
    apiIdentifier: `${PROVIDER_ID.ARK}:ep-20241229003242-f4sf8`,
    description: 'Doubao pro 4k',
  },
  {
    id: 'doubao-pro-32k',
    label: 'Doubao-pro-32k',
    apiIdentifier: `${PROVIDER_ID.ARK}:ep-20241103185419-vl2xk`,
    description: 'Doubao pro 32k',
  },
  {
    id: 'doubao-pro-128k',
    label: 'Doubao-pro-128k',
    apiIdentifier: `${PROVIDER_ID.ARK}:ep-20241229004232-d7pn7`,
    description: 'Doubao pro 128k',
  },
  {
    id: 'doubao-pro-32k-functioncall',
    label: 'Doubao-pro-32k-functioncall',
    apiIdentifier: `${PROVIDER_ID.ARK}:ep-20250105225256-9l57n`,
    description: 'Doubao pro 32k functioncall，支持调用工具',
  },
  {
    id: 'doubao-vision-pro-32k',
    label: 'Doubao-vision-pro-32k',
    apiIdentifier: `${PROVIDER_ID.ARK}:ep-20250107143035-9p8j2`,
    description: 'Doubao vision pro 32k，支持视觉理解，不支持调用工具',
    supportToolCalling: false,
  },
  {
    id: 'Doubao-vision-lite-32k',
    label: 'Doubao-vision-lite-32k',
    apiIdentifier: `${PROVIDER_ID.ARK}:ep-20250107194207-jvsf6`,
    description: 'Doubao vision lite 32k，支持视觉理解，不支持调用工具',
    supportToolCalling: false,
  },
  {
    id: 'deepseek',
    label: 'Deepseek',
    apiIdentifier: `${PROVIDER_ID.DEEPSEEK}:deepseek-chat`,
    description: "Deepseek's chat model，支持调用工具，不支持视觉理解",
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';
