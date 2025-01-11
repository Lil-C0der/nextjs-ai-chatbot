import { CoreTool } from 'ai';
import { z } from 'zod';

type RealWorldTools = 'sendEmail' | 'sendSMS' | 'sendLarkMessage';

export const realWorldToolNames: RealWorldTools[] = ['sendEmail', 'sendSMS', 'sendLarkMessage'];

export const realWorldTools: Record<RealWorldTools, CoreTool> = {
  sendEmail: {
    description: 'Send an email to a user',
    parameters: z.object({
      to: z.string().describe('The email address to send the email to'),
      subject: z.string().describe('The subject of the email'),
      body: z.string().describe('The body of the email'),
    }),
    execute: async ({ to, subject, body }) => {
      console.log(`Sending email to ${to} with subject ${subject} and body ${body}`);
      return `Email sent to ${to}`;
    },
  },

  sendSMS: {
    description: 'Send an SMS to a user',
    parameters: z.object({
      to: z.string().describe('The phone number to send the SMS to'),
      body: z.string().describe('The body of the SMS'),
    }),
    execute: async ({ to, body }) => {
      console.log(`Sending SMS to ${to} with body ${body}`);
      return `SMS sent to ${to}, and the body is ${body}`;
    },
  },

  sendLarkMessage: {
    description: 'Send a message to a user on Lark',
    parameters: z.object({
      to: z.string().describe('The user ID to send the message to'),
      body: z.string().describe('The body of the message'),
    }),
    execute: async ({ to, body }) => {
      console.log(`Sending Lark message to ${to} with body ${body}`);
      return `Lark message sent to ${to}, and the body is ${body}`;
    },
  },
};
