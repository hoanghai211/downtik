import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Define the TikTok video schema for our API responses
export const tiktokVideoSchema = z.object({
  username: z.string().optional(),
  avatar: z.string().optional(),
  thumbnail: z.string().optional(),
  video_url: z.string().optional(),
  audio_url: z.string().optional(),
  stats: z.object({
    views: z.string().optional(),
    comments: z.string().optional(),
    shares: z.string().optional(),
    downloads: z.string().optional()
  }).optional()
});

export type TikTokVideo = z.infer<typeof tiktokVideoSchema>;

// Original user schema for authentication if needed later
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
