const lolkilScraper = require('lolkil-scraper');

class AnimeController {
  home({ params: {} }, req) {
    req.send({
      coder: 'Loli Killers',
      date: new Date(),
      result: {
        anoboy: '/anime/anoboy/{query}',
        otakusedu: '/anime/otakudesu/{query}',
        malTopAiring: '/anime/mal/top-airing',
        malTopAnime: '/anime/mal/top-anime',
        malAnime: '/anime/mal/search/{query}',
        malManga: '/anime/mal/manga/{query}',
        malCharacter: '/anime/mal/character/{query}'
      }
    });
  }
  anoboy({ params: { query } }, req) {
    if (!query) throw req.send({ code: 404, error:{ message: 'masukkan parameter query/pencarian!' }});
    lolkilScraper.anime.anoboy_search(query)
    .then(response => {
      req.send(response);
    })
    .catch(error => {
      req.send(error);
    });
  }
  otakudesu({ params: { query } }, req) {
    if (!query) throw req.send({ code: 404, error:{ message: 'masukkan parameter query/pencarian' }});
    lolkilScraper.anime.otakudesu_search(query)
    .then(response => {
      req.send(response);
    })
    .catch(error => {
      req.send(error);
    });
  }
  malTopAiring({ params: {}}, req) {
    lolkilScraper.anime.mal_top_airing()
    .then(response => {
      req.send(response);
    })
    .catch(error => {
      req.send(error);
    });
  }
  malTopAnime({ params: {} }, req) {
    lolkilScraper.anime.mal_top_anime()
    .then(response => {
      req.send(response);
    })
    .catch(error => {
      req.send(error);
    });
  }
  malAnime({ params: { query } }, req) {
    if (!query) throw req.send({ code: 404, error:{ message: 'masukkan parameter query/pencarian' }});
    lolkilScraper.anime.mal_search_anime(query)
    .then(response => {
      req.send(response);
    })
    .catch(error => {
      req.send(error);
    });
  }
  malManga({ params: { query } }, req) {
    if (!query) throw req.send({ code: 404, error:{ message: 'masukkan parameter query/pencarian' }});
    lolkilScraper.anime.mal_search_manga(query)
    .then(response => {
      req.send(response);
    })
    .catch(error => {
      req.send(error);
    });
  }
  malCharacter({ params: { query } }, req) {
    if (!query) throw req.send({ code: 404, error:{ message: 'masukkan parameter query/pencarian' }});
    lolkilScraper.anime.mal_search_character(query)
    .then(response => {
      req.send(response);
    })
    .catch(error => {
      req.send(error);
    });
  }
}

module.exports = new AnimeController();