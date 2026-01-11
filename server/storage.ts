import { db } from "./db";
import { memories, type InsertMemory, type Memory } from "@shared/schema";
import { eq, desc, inArray } from "drizzle-orm";
import { embeddingService } from "./lib/embeddings";

export class DatabaseStorage {
  async createMemory(insertMemory: InsertMemory): Promise<Memory> {
    const embedding = await embeddingService.getEmbedding(insertMemory.content);
    const [memory] = await db.insert(memories).values({ ...insertMemory, embedding }).returning();
    return memory;
  }

  async getMemories(): Promise<Memory[]> {
    return await db.select().from(memories).orderBy(desc(memories.createdAt));
  }

  async searchMemories(query: string, limit: number = 5, categories?: string[], tags?: string[]) {
    const queryEmbedding = await embeddingService.getEmbedding(query);
    let q = db.select().from(memories);
    if (categories?.length) q = q.where(inArray(memories.category, categories)) as any;
    const results = await q;
    return results
      .map(m => ({ ...m, similarity: embeddingService.cosineSimilarity(queryEmbedding, m.embedding as number[]) }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, limit);
  }

  async deleteMemory(id: number) {
    await db.delete(memories).where(eq(memories.id, id));
  }
}

export const storage = new DatabaseStorage();
