// backend/src/navigation/navigation.service.ts
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Navigation, NavigationDocument } from "./Navigation.schema";
import { scrapNavigation } from "./Navigation.scraper";
import slugify from 'slugify';

@Injectable()
export class NavigationService {
  constructor(
        // injecting the Navigation mongoose model
    @InjectModel(Navigation.name)
    private navigationModel: Model<NavigationDocument>,
  ) {}

  // Scrape site and save/update in DB
  async scrapeAndSave(): Promise<Navigation[]> {
       // run scraper and get categories
    const scraped = await scrapNavigation();
    // save each scraped category into DB (insert or update if already exists)
    const saved = await Promise.all(
      scraped.map((h) =>
        this.navigationModel.findOneAndUpdate(
                    // use slug as unique identifier

          { slug: slugify(h.name, { lower: true }) }, // unique key
          {
            title: h.name,// category title
            slug: slugify(h.name, { lower: true }),// slugified version of title
            url: h.url,// scraped url
            last_scraped_at: new Date(), // when we scraped this
          },
          { upsert: true, new: true }, // create new  if doesn’t exist
        ),
      ),
    );
    // return all saved/updated documents
    return saved;
  }

  // Get all navigation headings from DB
  async getAll(): Promise<Navigation[]> {
    return this.navigationModel.find().sort({ title: 1 }).exec();
  }

  // clear all navigation data (useful for testing/debugging)
  async clearAll(): Promise<{ deleted: number }> {
    const result = await this.navigationModel.deleteMany({});
    return { deleted: result.deletedCount || 0 };
  }
}
