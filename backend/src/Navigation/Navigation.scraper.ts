// backend/src/navigation/navigation.scraper.ts
import { PlaywrightCrawler } from 'crawlee';

// interface to define the shape of my scraped navigation data
export interface TopHeadings {
  name: string; // name of the category
  url: string; // url for that category
}

export async function scrapNavigation(): Promise<TopHeadings[]> {
  // array to store all the scraped results
  const results: TopHeadings[] = [];

  // creating a new PlaywrightCrawler instance
  const crawler = new PlaywrightCrawler({
    async requestHandler({ page }) {
      // go to the world of books homepage and wait until DOM is loaded
      await page.goto('https://www.worldofbooks.com/en-gb/', {
        waitUntil: 'domcontentloaded',
      });

      // select all <summary> elements and extract data
      const categories = await page.$$eval(
        'summary', // selecting all summary tags
        (elements) =>
          elements
            .filter((el) => el.textContent?.trim() !== 'See All')
            // .slice(0, 5)
            // mapping to an object with name and url
            .map((el) => {
              const link = el.parentElement?.querySelector('a')?.href || '';
              return { name: el.textContent?.trim() || '', url: link };
            }),
      );

      // log categories in console for debugging
      console.log(categories);
      // pushing all scraped categories into results array

      results.push(...categories);
    },
    headless: true, // running in headless mode (browser not visible)
  });

  // Start crawler on World of Books homepage
  await crawler.run(['https://www.worldofbooks.com/en-gb/']);

  // return the final scraped results

  return results;
}
