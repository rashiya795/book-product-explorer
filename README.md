# OnlineBooks Project

## Overview
OnlineBooks is a web application where users can browse, search, and explore books online. The project consists of two main parts:
1. **Backend** – Handles APIs, database operations, and server logic.
2. **Frontend** – The user interface built with React.js to display books and interact with the backend.

## Folder Structure

## Setup Instructions

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   
   2.Install dependencies:
npm install

3.Start the server:
npm start

4.Backend runs at http://localhost:4000

Frontend

Navigate to the frontend folder:
1.Install dependencies:
npm install


2.Start the React app:
npm run dev


3.Frontend runs at http://localhost:3000


----->Technologies Used

1.Frontend: React.js, Tailwind CSS,NextJs (or your styling library)

2.Backend: Node.js, Nestjs.js, MongoDB,Playwright,Crawlee

3.Other Tools: npm, Git, etc.


## Navigation Bar Scraping

I implemented a **navigation scraper** using **NestJS, Playwright (via Crawlee), and MongoDB**.  
The goal is to dynamically scrape categories from the **World of Books** website and save them in MongoDB, instead of hardcoding them.

### How It Works
1. **Scraper (`navigation.scraper.ts`)**
   - Uses `PlaywrightCrawler` to open the World of Books homepage.
   - Selects all `<summary>` elements from the navigation bar.
   - Extracts the **category name** and **URL** (ignoring "See All" links).
   - Returns a list of categories in the format:
     ```json
     [
       { "name": "Fiction", "url": "/en-gb/category/fiction" },
       { "name": "Children's Books", "url": "/en-gb/category/childrens-books" }
     ]
     ```

2. **Service (`navigation.service.ts`)**
   - Runs the scraper and receives the categories.
   - Uses **Mongoose** to save the data in MongoDB.
   - Each category is stored with:
     - `title` (category name)
     - `slug` (slugified unique identifier)
     - `url`
     - `last_scraped_at`
   - If a category already exists, it updates the record (so no duplicates).

3. **Controller (`navigation.controller.ts`)**
   Provides three API endpoints:
   - `POST /navigation/scrape` → Scrapes categories and saves them to MongoDB.
   - `GET /navigation` → Fetches all saved navigation categories from the DB.
   - `DELETE /navigation` → Clears all navigation entries (useful for re-scraping).

4. **Module (`navigation.module.ts`)**
   - Bundles together the schema, service, and controller for easy import into the main app.

### Why This Approach?
- Ensures the navigation menu is **always dynamic**.
- Scraped categories are stored in MongoDB, so the frontend can fetch them from the backend.
- Avoids manual updates when the source website changes categories.

### Example API Usage
- Scrape categories:
  ```bash
  curl -X POST http://localhost:4000/navigation/scrape


