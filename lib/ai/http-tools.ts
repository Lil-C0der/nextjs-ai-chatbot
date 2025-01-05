import { CoreTool } from 'ai';
import z from 'zod';

type HttpTools = 'getWeather' | 'genUserList' | 'getCurrentCoorByIP';

export const httpToolNames: HttpTools[] = ['getWeather', 'genUserList', 'getCurrentCoorByIP'];

export const httpTools: Record<HttpTools, CoreTool> = {
  genUserList: {
    description: 'Generate a list of random users',
    parameters: z.object({
      count: z.number().describe('The number of users to generate'),
    }),
    execute: async ({ count }) => {
      console.trace();
      const response = await fetch(`https://randomuser.me/api/?results=${count}`);
      const { results } = await response.json();

      return results;
    },
  },
  getCurrentCoorByIP: {
    description: 'Get the current location by IP',
    parameters: z.object({}),
    execute: async () => {
      const response = await fetch('https://ipapi.co/json');
      const locationData = await response.json();

      return {
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        city: locationData.city,
        ip: locationData.ip,
      };
    },
  },
  getWeather: {
    description: 'Get the current weather at a location',
    parameters: z.object({
      latitude: z.number(),
      longitude: z.number(),
    }),
    execute: async ({ latitude, longitude }) => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&hourly=temperature_2m&daily=sunrise,sunset&timezone=auto`
      );

      const weatherData = await response.json();
      return weatherData;
    },
  },
};
