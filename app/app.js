let express = require('express');
let app = express();
app.use(express.static('public'))


/**
 * 
 * Задаємо шаблонізатор
 */
app.set('view engine', 'pug');

app.listen(3000, function () {
  console.log('node express work on 3000');
});

app.get('/', function (req, res) {
  res.render('main', {
    foo: 'Hello',
    bar: 7
  });
});
 
