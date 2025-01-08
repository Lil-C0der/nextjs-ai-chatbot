import { createResource } from '@/lib/db/queries';

export async function POST(request: Request) {
  const { content } = await request.json();
  console.log('content', content);
  try {
    const resp = await createResource({ content });
    if (resp.success) {
      return new Response(JSON.stringify(resp.message), { status: 200 });
    }
    throw new Error(resp.message ?? 'Failed to create resource');
  } catch (error) {
    const errMsg = error instanceof Error && error.message.length > 0 ? error.message : 'Error, please try again.';
    return new Response(JSON.stringify(errMsg), { status: 500 });
  }
}
