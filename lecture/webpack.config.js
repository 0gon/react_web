const path = require('path');

module.exports={
    name :'word-relay-setting',
    mode : 'development', //실서비스 production
    devtool : 'eval', //빠르게 

    resolve : {
        extensions : ['.js', '.jsx']
    },
    
    entry : {
        app:['./client'], //'./WordRelay.jsx' 다른곳에서 불러왔기 때문에 
    }, //입력
    output : {
        path: path.join(__dirname, 'dist'),
        filename : 'app.js'
    }, //출려


};