// import { relations } from "drizzle-orm";
import {
  integer,
  numeric,
  text,
  boolean,
  pgTable,
  varchar,
  uuid,
  timestamp,
} from "drizzle-orm/pg-core";


export const JobListings = pgTable("job_listings", {
  id: uuid("id").defaultRandom().primaryKey(),
  jobTitle: text("").notNull(),
  jobId: text("job_id").notNull(),
  description: text("description"),
  payRate: numeric("pay_rate").notNull(),
	JobType: text("job_id").notNull(),
	basicQualifications: text("basic_qualifications").notNull(),
	desiredSkills: text("desired_skills").notNull(),
	workSchedule: text("work_schedule").notNull(),
  physicalDemand: text("physical_demand").notNull(),
  publishedAt: timestamp("published_at").notNull(),
});


// export const Videos = pgTable("videos", {
//   id: uuid("id").defaultRandom().primaryKey(),
//   userId: varchar("user_id", { length: 50 }).notNull(),
//   videoId: text("video_id").notNull(),
//   title: text("title").notNull(),
//   description: text("description"),
//   publishedAt: timestamp("published_at").notNull(),
//   thumbnailUrl: text("thumbnail_url"),
//   channelId: text("channel_id").notNull(),
//   channelTitle: text("channel_title").notNull(),
//   viewCount: integer("view_count").default(0),
//   likeCount: integer("like_count").default(0),
//   dislikeCount: integer("dislike_count").default(0),
//   commentCount: integer("comment_count").default(0),
//   createdAt: timestamp("created_at").defaultNow().notNull(),
//   updatedAt: timestamp("updated_at").defaultNow().notNull(),
// });

// export const YouTubeChannels = pgTable("youtube_channels", {
//   id: uuid("id").defaultRandom().primaryKey(),
//   userId: varchar("user_id", { length: 50 }).notNull(),
//   name: text("name").notNull(),
//   channelId: text("channel_id"),
//   createdAt: timestamp("created_at").defaultNow().notNull(),
//   updatedAt: timestamp("updated_at").defaultNow().notNull(),
// });

// export const VideoComments = pgTable("video_comments", {
//   id: uuid("id").defaultRandom().primaryKey(),
//   videoId: uuid("video_id").notNull(),
//   userId: varchar("user_id", { length: 50 }).notNull(),
//   commentText: text("comment_text").notNull(),
//   likeCount: integer("like_count").default(0),
//   dislikeCount: integer("dislike_count").default(0),
//   publishedAt: timestamp("published_at").notNull(),
//   isUsed: boolean("is_used").default(false),
//   createdAt: timestamp("created_at").defaultNow().notNull(),
//   updatedAt: timestamp("updated_at").defaultNow().notNull(),
// });


// // Types
// // export type Video = typeof Videos.$inferSelect;
// // export type InsertVideo = typeof Videos.$inferInsert;
// // export type YouTubeChannelType = typeof YouTubeChannels.$inferSelect;
// // export type InsertYouTubeChannel = typeof YouTubeChannels.$inferInsert;
// // export type VideoComment = typeof VideoComments.$inferSelect;
// // export type InsertVideoComment = typeof VideoComments.$inferInsert;
// // export type Idea = typeof Ideas.$inferSelect;
// // export type InsertIdea = typeof Ideas.$inferInsert;
// // export type CrewJob = typeof CrewJobs.$inferSelect;
// // export type InsertCrewJob = typeof CrewJobs.$inferInsert;
