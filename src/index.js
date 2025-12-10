import express from 'express';
import path from 'path';
import expresslayouts from 'express-ejs-layouts';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views','./src/views');


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));

app.get('/login', (req, res) => res.render('login'));
app.get('/recuperar', (req, res) => res.render('recuperarcontra'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
