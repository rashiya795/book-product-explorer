import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

// Type for a Navigation document
export type NavigationDocument = Navigation & Document;

@Schema({ timestamps: true }) // Adds createdAt and updatedAt
export class Navigation {
  @Prop({ required: true })
  title: string; // The text displayed in the navbar

  @Prop({ required: true, unique: true })
  slug: string; // URL-friendly identifier

  @Prop({ required: true })
  url: string; // The scraped URL for this navigation item

  @Prop()
  last_scraped_at: Date; // timestamp for last scraping
}

export const NavigationSchema = SchemaFactory.createForClass(Navigation);
