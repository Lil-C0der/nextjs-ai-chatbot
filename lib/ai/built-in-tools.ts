import { CoreTool } from 'ai';
import { z } from 'zod';

type BuiltInTools = 'getCurrentDate' | 'getCurrentTime';

export const builtInToolNames: BuiltInTools[] = ['getCurrentDate', 'getCurrentTime'];

export const builtInTools: Record<BuiltInTools, CoreTool> = {
  getCurrentDate: {
    description: 'Get the current date',
    parameters: z.optional(z.object({})),
    execute: () => {
      return Promise.resolve(new Date().toLocaleDateString());
    },
  },
  getCurrentTime: {
    description: 'Get the current time',
    parameters: z.optional(z.object({})),
    execute: () => {
      return Promise.resolve(new Date().toLocaleTimeString());
    },
  },
};
