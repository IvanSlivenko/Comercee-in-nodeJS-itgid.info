module.exports = function (req, res, con, next) { 
    console.log(req.cookies.hash);

    if (req.cookies.hash == undefined || req.cookies.id == undefined) {
        res.redirect("/login");
        return false;
    }
    con.query(
        'SELECT * FROM `user` WHERE id=' + req.cookies.id + ' and hash="' + req.cookies.hash + '"',
        // 'SELECT * FROM `user` WHERE id=' + req.cookies.id + ' and hash="' + req.cookies.hash + '"',
      function (error, result) {
        if (error) reject(error);
        console.log("result", result);
        if (result.length == 0) {
          console.log("error user not found");
          res.redirect("/login");
        } else {
            //callback();
          //   res.render("admin", {});
          next();
        }
      }
    );
}