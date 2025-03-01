const http = require('http');
var countMain = 0;
var countAbout = 0;
var count404 = 0;
var count = 0;
const server = http.createServer((req, res) => {
    count++;
    console.log("Запрос получен");
    if (req.url === '/') {
        countMain++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('<a href="/about">Перейти на страницу обо мне</a><p><h1>Просмотров страницы main:' + countMain + '</h1><p><h1>Просмотров всех страниц сайта:' + count + '</h1>');
    } else if (req.url === '/about') {
        countAbout++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('<a href="/">Перейти на страницу главная</a><p><h1>Просмотров страницы about:' + countAbout + '</h1><p><h1>Просмотров всех страниц сайта:' + count + '</h1>');
    } else {
        count404++;
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('<h1>Страница 404</h1><p><h1>Просмотров страницы 404:' + count404 + '</h1><p><h1>Просмотров всех страниц сайта:' + count + '</h1>');
    }
});

const port = '3000';

server.listen(port);