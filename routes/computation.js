var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let x = Math.random()*100;
    x= x.toFixed(3)
    if(req.query.x !=undefined){
        x = parseFloat(req.query.x)
    }
    let num1=Math.imul(x);
    let num2=Math.log(x);
    let num3=Math.log10(x);

  res.send('computation', {x:x,imul:num1,log:num2,log10:num3});
});

module.exports = router;
