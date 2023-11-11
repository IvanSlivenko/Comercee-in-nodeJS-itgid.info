let express = require('express');
let app = express();
app.use(express.static('public'))


/**
 * 
 * Задаємо шаблонізатор
 */
app.set('view engine', 'pug');

/**
 * Підключаємо mysql модуль
 */
let mysql = require('mysql');

/**
Налаштовуємо модуль 
*/
let con = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'market'
  
});


app.listen(3000, function () {
  console.log('node express work on 3000');
});

app.get('/', function (req, res) {
  
  con.query(
    "SELECT * FROM goods",
    function (error, result) {
    if (error) throw err;
      // console.log(result);
      let goods = {};
      for (let i = 0; i < result.length; i++) { 
        goods[result[i]['id']] = result[i];
      }
      // console.log(goods);
      console.log(JSON.parse(JSON.stringify(goods)));
      res.render("main", {
        foo: "Hello",
        bar: 7,
        goods: JSON.parse(JSON.stringify(goods))
      });
  });
  
});
app.get('/cat', function (req,res) { 
  console.log(reg.query.id);
  let catId = req.query.id;

  

});
 
