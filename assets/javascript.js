var about = $("#about");
var portfolio = $("#portfolio");
var connect = $("#connect");

function showAbout() {
  about.scrollIntoView(true); // Top
}

function showPortfolio() {
    portfolio.scrollIntoView(true); // Top
  }

about.click(showAbout());
portfolio.click(showPortfolio());