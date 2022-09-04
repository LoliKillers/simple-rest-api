const lolkilScraper = require('lolkil-scraper');
const isEmoji = require('is-emoji');

class ConvertController {
  home({ params: {}}, req) {
    req.send({
      coder: 'Loli Killers',
      date: new Date(),
      result: {
        emoji2png: '/convert/emoji2png/{emoji}'
      }
    });
  }
  emoji2png({ params: { emoji }}, req) {
    if (!emoji) throw req.send({ code: 404, error: { message: 'masukkan parameter emoji/emoticon'}});
    if (!isEmoji(emoji)) throw req.send({ code: 404, error: { message: 'emoji/emoticon tidal valid!'}})
    lolkilScraper.convert.emoji_to_png(emoji)
    .then(response => {
      req.send(response);
    })
    .catch(error => {
      req.send(error);
    });
  }
}

module.exports = new ConvertController();