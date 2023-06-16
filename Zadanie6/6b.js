const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('hello world');
});

app.use(express.urlencoded());

app.get('/form', (req, res) => {
    const formHTML = `
    <form action="/formdata" method="post">
      <label for="name">Imie:</label>
      <input type="text" id="name" name="name"><br><br>
      
      <label for="email">Nazwisko:</label>
      <input type="text" id="sureName" name="sureName"><br><br>
      
      <label for="message">Wiek:</label>
      <input type="number" id="age" name="age" min="1" max="100">
      
      <br>
      <input type="submit" value="Send">
    </form>
  `;

    res.send(formHTML);
});

app.post('/formdata', (req, res) => {
    const {name, sureName, age} = req.body;

    const formDataHTML = `
    <h1>Form data:</h1>
    <p><strong>Imie:</strong> ${name}</p>
    <p><strong>Nazwisko:</strong> ${sureName}</p>
    <p><strong>Wiek:</strong> ${age}</p>
  `;

    res.send(formDataHTML);
});

app.listen(8080, () => {
    console.log('Server running!');
});