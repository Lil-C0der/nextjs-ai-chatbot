import { createResource, findRelevantContent } from '@/lib/db/queries';
import { tool, generateObject, LanguageModelV1, CoreTool } from 'ai';
import { z } from 'zod';
import { customModel } from '..';

export type RagTools = 'addResource' | 'getInformation' | 'understandQuery';

export const injectRagTools = (options: { llm: LanguageModelV1 }): Record<RagTools, CoreTool> => {
  const model = options.llm;

  return {
    addResource: tool({
      description: `add a resource to your knowledge base.
    If the user provides a random piece of knowledge unprompted, use this tool without asking for confirmation.`,
      parameters: z.object({
        content: z.string().describe('the content or resource to add to the knowledge base'),
      }),
      execute: async ({ content }) => {
        const res = await createResource({ content });
        return res.message;
      },
    }),
    getInformation: tool({
      description: `get information from your knowledge base to answer questions.`,
      parameters: z.object({
        question: z.string().describe('the users question'),
        similarQuestions: z.array(z.string()).describe('keywords to search'),
      }),
      execute: async ({ similarQuestions }) => {
        const results = await Promise.all(
          similarQuestions.map(async (question) => await findRelevantContent(question))
        );
        // Flatten the array of arrays and remove duplicates based on 'name'
        const uniqueResults = Array.from(new Map(results.flat().map((item) => [item?.name, item])).values());
        return uniqueResults;
      },
    }),
    understandQuery: tool({
      description: `understand the users query. use this tool on every prompt.`,
      parameters: z.object({
        query: z.string().describe('the users query'),
        toolsToCallInOrder: z
          .array(z.string())
          .describe('these are the tools you need to call in the order necessary to respond to the users query'),
      }),
      execute: async ({ query }) => {
        const { object } = await generateObject({
          model,
          system: 'You are a query understanding assistant. Analyze the user query and generate similar questions.',
          schema: z.object({
            questions: z.array(z.string()).max(3).describe("similar questions to the user's query. be concise."),
          }),
          prompt: `Analyze this query: "${query}". Provide the following:
              3 similar questions that could help answer the user's query`,
        });
        return object.questions;
      },
    }),
  };
};
