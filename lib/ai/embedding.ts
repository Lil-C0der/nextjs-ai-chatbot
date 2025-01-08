import { embed, embedMany } from 'ai';
import { cosineDistance, desc, gt, sql } from 'drizzle-orm';
import { registry } from './model-provider';
import { defaultEmbeddingModel } from '.';
import { embeddings } from '../db/schema';
import { norm } from 'mathjs';

// const embeddingModel = openai.embedding("text-embedding-ada-002");

const generateChunks = (input: string): string[] => {
  return input
    .trim()
    // .split('.')
    .split('。')
    .filter((i) => i !== '');
};

// 手动对向量做降维处理
const slicedNormL2 = (vec: number[], dim: number = 1536): number[] => {
  // 计算向量前 dim 个元素的 L2 范数
  const slicedVec = vec.slice(0, dim);
  const normValue = norm(slicedVec, 2);
  // 对向量的前 dim 个元素进行归一化处理
  return slicedVec.map((v) => v / normValue);
};

export const generateEmbeddings = async (value: string): Promise<Array<{ embedding: number[]; content: string }>> => {
  // FIXME: hejun dimensions error: expected 1536 dimensions, not 2560
  const chunks = generateChunks(value);
  const { embeddings } = await embedMany({
    model: defaultEmbeddingModel,
    values: chunks,
  });
  return embeddings.map((e, i) => ({ content: chunks[i], embedding: slicedNormL2(e) }));
};

export const generateEmbedding = async (value: string): Promise<number[]> => {
  const input = value.replaceAll('\n', ' ');
  const { embedding } = await embed({
    model: defaultEmbeddingModel,
    value: input,
  });
  return slicedNormL2(embedding);
};
