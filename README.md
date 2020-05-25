# learning-javascript

### 运行命令
npm start

### 包引用
### npm init

### npm install rulinma-learning-javascript

### index.js
    // import sum from 'rulinma-learning-javascript'
    var sumx = require('rulinma-learning-javascript/src/sum')

    console.log(sumx(2,3));

    console.log("test");

### package.json
    {
    "name": "my-js-test",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "start": "node  index.js ",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "rulinma-learning-javascript": "^1.0.0"
    }
    }

### npm start index.js
### node index.js