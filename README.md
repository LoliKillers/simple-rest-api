<div align="center">
<img src="https://telegra.ph/file/7c6f01f90025391361689.png" alt="DARK CODER" width="300" />

![DARK CODER](https://socialify.git.ci/LoliKillers/simple-rest-api/image?description=1&font=Source%20Code%20Pro&forks=1&language=1&owner=1&pattern=Floating%20Cogs&stargazers=1&theme=Dark) <br>

<p align="center">
<a href="https://wa.me/6285785445412" alt="Whatsapp!"> <img src="https://aleen42.github.io/badges/src/whatsapp.svg" /> </a>
<a href="https://github.com/LoliKillers/simple-rest-api/graphs/commit-activity" alt="Maintenance"> <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" /> </a>
</p>
<p align="center">
<a href="https://github.com/LoliKillers/simple-rest-api" alt="GitHub closed issues"> <img src="https://img.shields.io/github/issues-closed-raw/LoliKillers/simple-rest-api?style=flat&logo=github&color=success" /> </a>
<a href="https://github.com/LoliKillers/simple-rest-api" alt="GitHub commit activity"> <img src="https://img.shields.io/github/commit-activity/m/LoliKillers/simple-rest-api" /> </a>
<a href="https://github.com/LoliKillers/simple-rest-api/graphs/contributors" alt="GitHub contributors"> <img src="https://img.shields.io/github/contributors/LoliKillers/simple-rest-api?style=flat&logo=github" /> </a>
<a href="https://github.com/LoliKillers/simple-rest-api/network/members" alt="GitHub forks"> <img src="https://img.shields.io/github/forks/LoliKillers/simple-rest-api?label=Forks&logo=github" /> </a>
<a href="https://github.com/LoliKillers/simple-rest-api" alt="GitHub closed pull requests"> <img src="https://img.shields.io/github/issues-pr-closed-raw/LoliKillers/simple-rest-api?color=success" /> </a>
<a href="https://github.com/LoliKillers/simple-rest-api" alt="GitHub issues"> <img src="https://img.shields.io/github/issues-raw/LoliKillers/simple-rest-api?style=flat&logo=github&color=yellow" /> </a>
</p>
</div>

# SIMPLE REST API

>
>
>
</div>
<p align="center">
  <a href="https://github.com/LoliKillers"><img title="Author" src="https://img.shields.io/badge/Author-Loli Killers-red.svg?style=for-the-badge&logo=github" /></a>
  <h4 align="center">
</h4>
</p>

## Installation

Download dan install terlebih dahulu package [npm](https://npmjs.com/)

* Clone repo ini terlebih dahulu
* Install semua package/module yang akan di gunakan
```bash
npm install
```

## Usage

Untuk memulai server, ketik perintah dibawah melalui CMD:
```bash
npm start
```
Atau
```bash
npm run nodemon
```
Dan buka tauatan [localhost:8080](http://localhost:8080/)

### Deploy in heroku

```shell
npm install --global heroku
heroku login
git clone https://github.com/LoliKillers/simple-rest-api
cd simple-rest-api
heroku create YOUR_APP_NAME_HEROKU
heroku git:remote -a YOUR_APP_NAME_IN_HEROKU
git add .
git commit -m "Make It Butter"
git push heroku master
```

#### Or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/LoliKillers/simple-rest-api)

Open : [https://APP_NAME.herokuapp.com](https://APP_NAME.herokuapp.com)
Demo : [https://simple-rest-api-example.herokuapp.com](https://simple-rest-api-example.herokuapp.com)

## Endpoint

| Url        | Params           | Type | Keterangan |
| ------------- |:-------------:| :-----:|  :-----|
| /      | - | - | beranda  
| /image/pinterest/{query}    | query |  String | Mencari gambar dari [pinterest](https://id.pinterest.ca) |
| /image/wallpaperflare/{query}    | query |  String | Mencari gambar dari [wallpaperflare](https://wallpaperflare.com) |
| /convert/emoji2png/{emoji}    | emoji |  String | Mengkonversi imoji/emoticon menjadi image/png |
| /anime/anoboy/{query} | query | String | Mencari detail anime dari situs [anoboy](https://62.182.83.93) |
| /anime/otakudesu/{query} | query | String | Mencari anime dan detail dari situs [otakudesu](https://otakudesu.fun/) |
| /anime/mal/search/{query} | query | String | Mencari detail anime, dengan beberapa list dari situs [my anime list](https://myanimelist.net) |
| /anime/mal/manga/{query} | query | String | Mencari detail manga, dengan beberapa list dari situs [my anime list](https://myanimelist.net) |
| /anime/mal/character/{query} | query | String | Mencari character, dengan beberapa list dan detail character anime dari situs [my anime list](https://myanimelist.net) |
| /anime/mal/top-airing | - | - | Dapatkan top airing hari ini dari [my anime list](https://myanimelist.net) |
| /anime/mal/top-anime | - | - | Dapatkan top anime hari ini dari [my anime list](https://myanimelist.net) |


## Sample response

Hasil result json : https://simple-rest-api-example.herokuapp.com/
```json
{
  "date":"2022-09-04T02:00:34.899Z",
  "coder":"Loli Killers",
  "message":"Selamat datang di simple rest api"
}
```

## Credits 📍
* Nah, itu semua ada dalam sejarah komit
Jangan ragu untuk membuka permintaan tarik jika anda menemukan kesalahan
* Jangan lupa untuk meninggalkan bintang ok
* Dan tunggu update saya selanjutnya!!👣
* Mastah diem yak, jangan dibuli, namanya juga pemula stah
* Begabunglah dengan group [whatsapp saya](https://chat.whatsapp.com/EH9g1SKf588HXEFY51zQMu)


## License
[MIT](https://choosealicense.com/licenses/mit/)
Copyright (c) 2020-present
