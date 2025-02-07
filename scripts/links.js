const baseURL = "https://marcelmusuyu.github.io/wdd230/";
const linksURL = `${baseURL}/data/links.json`;

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
    console.log(data);
     displayLinks(data);
}

getLinks();

