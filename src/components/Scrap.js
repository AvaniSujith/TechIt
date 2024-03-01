const axios = require('axios');
const cheerio = require('cheerio');

// Function to fetch the HTML content of the webpage
async function fetchHTML(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching the page:', error);
    return null;
  }
}

// Function to scrape data from the HTML content
function scrapeData(html) {
  const $ = cheerio.load(html);

  // Example: Scraping titles of articles from Reddit's front page
  const titles = [];
  $('h3').each((index, element) => {
    titles.push($(element).text());
  });

  return titles;
}

// Main function to execute the scraping process
async function main() {
  const url = 'https://www.reddit.com/';
  const html = await fetchHTML(url);
  if (html) {
    const data = scrapeData(html);
    console.log('Scraped data:', data);
  }
}

// Call the main function
main();
