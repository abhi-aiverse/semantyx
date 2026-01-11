import { pgTable, text, serial, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const memories = pgTable("memories", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  category: text("category").default("general"),
  tags: text("tags").array(),
  embedding: jsonb("embedding").$type<number[]>(), 
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertMemorySchema = createInsertSchema(memories).omit({ 
  id: true, 
  createdAt: true, 
  embedding: true 
});

export type Memory = typeof memories.$inferSelect;
export type InsertMemory = z.infer<typeof insertMemorySchema>;
export type MemoryResponse = Memory & { similarity?: number };
