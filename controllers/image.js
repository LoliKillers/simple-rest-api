const lolkilScraper = require('lolkil-scraper');

class ImageController {
  home({ params: {} }, req) {
    req.send({
      coder: 'Loli Killers',
      date: new Date(),
      result: {
        pinterest: '/image/pinterest/{query}',
        wallpaperflare: '/image/wallpaperflare/{query}'
      }
    })
  }
  pinterest({ params: { query } }, req) {
    if (!query) throw req.send({ code: 404, error:{ message: 'masukkan parameter query/pencarian!'}});
    lolkilScraper.image.pinterest(query)
    .then(response => {
      req.send(response);
    })
    .catch(error => {
      req.send(error);
    });
  }
  wallpaperflare({ params: { query } }, req) {
    if (!query) throw req.send({ code: 404, error:{ message: 'masukkan parameter query/pencarian!'}});
    lolkilScraper.image.wallpaperflare(query)
    .then(response => {
      req.send(response);
    })
    .catch(error => {
      req.send(error);
    });
  }
}

module.exports = new ImageController();