const express = require('express');
const app = express();

const path = require('node:path')

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log (`Servidor corriendo en el puerto: http://localhost:${PORT}`));

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath))

//app.listen(3000, () => console.log(`Server up on port: http://localhost:3000`))

app.get('/',( req, res ) => {
    const pathHome = path.join(__dirname, './views/home.html')
    res.sendFile(pathHome)
})
app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/register.html'));
});
app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

//Public (static Listen Server)
//app.use(express.static('public'))

//app.listen( 3000, () => console.log(`Server up on PORT: http://localhost:3000`))