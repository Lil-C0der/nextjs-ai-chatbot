// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT 4o mini',
    apiIdentifier: 'gpt-4o-mini',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
  },
  {
    id: 'ep-20241229003242-f4sf8',
    label: 'Doubao-pro-4k',
    apiIdentifier: 'ep-20241229003242-f4sf8',
    description: 'Doubao pro 4k',
  },
  {
    id: 'doubao-pro-32k',
    label: 'Doubao-pro-32k',
    apiIdentifier: 'ep-20241103185419-vl2xk',
    description: 'Doubao pro 32k',
  },
  {
    id: 'doubao-pro-128k',
    label: 'Doubao-pro-128k',
    apiIdentifier: 'ep-20241229004232-d7pn7',
    description: 'Doubao pro 128k',
  },
  {
    id: 'doubao-pro-32k-functioncall',
    label: 'Doubao-pro-32k-functioncall',
    apiIdentifier: 'ep-20250105225256-9l57n',
    description: 'Doubao pro 32k functioncall',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';
