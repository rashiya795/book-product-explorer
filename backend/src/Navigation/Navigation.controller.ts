import { Controller, Post,Get,Delete } from "@nestjs/common";
import { NavigationService } from "./Navigation.service";
import { Navigation } from "./Navigation.schema";


// The @Controller decorator defines the base route: /navigation
@Controller('navigation')
export class NavigationController{

    // Inject NavigationService so we can use its methods.
    constructor(private readonly navService:NavigationService){}

// POST /navigation/scrape
  // This will call the service to scrape navigation data and save it into the database.
    @Post('scrape')
    async scrapeAndSave():Promise<Navigation[]>{
    return this.navService.scrapeAndSave()

    }
// GET /navigation
  // This will return all saved navigation entries from the database
 @Get()
  async getAll(): Promise<Navigation[]> {
    return this.navService.getAll();
  }

  // DELETE /navigation
  // This endpoint is used to clear the navigation collection in MongoDB.
  // It is mainly useful during development or re-scraping, so you can remove
  // old/duplicate navigation data before inserting fresh ones.
  @Delete()
  async clearAll(): Promise<{ deleted: number }> {
    return this.navService.clearAll();
  }
}


