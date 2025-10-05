import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Navigation,NavigationSchema } from "./Navigation.schema";
import { NavigationService } from "./Navigation.service";
import { NavigationController } from "./Navigation.controller";
@Module({
imports:[
        // importing the Navigation schema so mongoose can use it
    MongooseModule.forFeature([
        {name:Navigation.name,schema:NavigationSchema},
    ]),
],
  // adding controller to handle incoming API requests
 controllers: [NavigationController],
   // adding service to handle business logic
  providers: [NavigationService],
    // exporting service so that other modules can use it
exports: [NavigationService],
})
// creating the Navigation module which bundles schema, controller, and service
export class NavigationModule {}