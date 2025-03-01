const http = require('http');
var countMain = 1;
var countAbout = 1;
var count404 = 1;
var count = 1;
const server = http.createServer((req, res) => {
    console.log("Запрос получен");
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('<a href="/about">Перейти на страницу обо мне</a><p><h1>Просмотров страницы main:' + countMain + '</h1><p><h1>Просмотров всех страниц сайта:' + count + '</h1>');
        countMain++;
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('<a href="/">Перейти на страницу главная</a><p><h1>Просмотров страницы about:' + countAbout + '</h1><p><h1>Просмотров всех страниц сайта:' + count + '</h1>');
        countAbout++;
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('<h1>Страница 404</h1><p><h1>Просмотров страницы 404:' + count404 + '</h1><p><h1>Просмотров всех страниц сайта:' + count + '</h1>');
        count404++;
    }
    count++;
});

const port = '3000';

server.listen(port);