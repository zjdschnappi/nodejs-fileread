var fs = require('fs');
// console.log(reg);
// console.log(reg.test('1.1.xhtml'))
// console.log(reg.test('1.xhtml'))
// console.log(reg.test('2.xhtml'))
// console.log(reg.test('1.txt'))
var regf = function(str, ele) {
    var reg = new RegExp('^' + str + '.(\\d.)?xhtml$');
    return reg.test(ele);
};
var chooseCha = function(db, str) {
    var text = '';
     for(var i=0; i<db.length; i++){
    if (regf(str, db[i])) {
        //异步的
        // fs.readFile('Text/' + db[2], {
        //     encoding: 'utf-8'
        // }, function(err, data) {
        //     if (err) throw err;
        //     var index1 = data.indexOf('<body>'),
        //         index2 = data.indexOf('</body>');
        //     global.text += data.slice(index1 + 6, index2);
        //     console.log(global.text);
        //
        // });
        var readfile=fs.readFileSync('Text/' + db[i], {
             encoding: 'utf-8'
         });
         var index1 = readfile.indexOf('<body>'),
                  index2 = readfile.indexOf('</body>');
         text+=readfile.slice(index1 + 6, index2);

     }
    }

    fs.writeFile(''+str+str+str+'.html','<!DOCTYPE html>' +
    '<html>' +
    '<head>' +
    '<meta http-equiv="content-type" content="text/html;charset=utf-8">' +
    '<title></title>' +
    '<link href="../Styles/Style.css" rel="stylesheet" type="text/css" />' +
    '</head>' +
    '<body>'+text+'</body></html>',function (err) {
        if(err) throw err;
        console.log('成功');

    });
};

exports.chooseCha = chooseCha;

//
