import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname, '..', 'public');
console.log("Public serving from:", publicPath);

app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/login', (req, res) => res.render('login'));
app.get('/recuperar', (req, res) => res.render('recuperarcontra'));
app.get('/principal', (req, res) => res.render('principal'));
app.get('/entrega', (req, res) => res.render('entregas'));

app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
