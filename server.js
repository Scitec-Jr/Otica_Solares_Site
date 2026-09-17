const express = require('express');
const path = require('path'); 
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/Sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'sobre.html'));
});

app.get('/Produtos', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'produtos.html'));
});

app.get('/Galeria', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'galeria.html'));
});

app.get('/Contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'contato.html'));
});