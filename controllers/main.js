class MainController {
  home({ params: {} }, req) {
    var obj = {
      date: new Date(),
      coder: 'Loli Killers',
      message: 'Selamat datang di simple rest api'
    };
    req.send(obj);
  }
}

module.exports = new MainController();