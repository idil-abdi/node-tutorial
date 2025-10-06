//? Intro
// type 'node app.js' to run code in terminal
    // const amount = 9
    // if (amount < 10) {
    //     console.log('small number');
        
    // } else {
    //     console.log('big number');
        
    // }

    // console.log(`hey it's my first node app!!!`);

//? globals
    // console.log(__dirname);
    // console.log(__filename);
    // console.log(module);
    // console.log(process);
    // setInterval(() => {
    //     console.log('hello world');
        
    // }, 1000);

//? modules - Encapsulated code (only share minimum)

// const name = require('./modules-name')
// const sayHi = require('./modules-util')
// const data = require('./altenative-syntax')
// require('./mind-granade')
// sayHi('susan')
// sayHi(name.john)
// sayHi(name.peter)

//? Built-in modules
// const os = require("os") 

// info about current user
// const user = os.userInfo()
// console.log(user);
 // method returns the systeem uptime in seconds
// console.log(`the system uptimme is ${os.uptime()} seconds`);

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totaleMem:os.totalmem(),
//     freemem: os.freemem(),
// }

// console.log(currentOS);

// const path = require('path');
// console.log(path.sep);

// ? fs Module(sync)
// const {readFileSync, writeFileSync} = require('fs')

// const first  = readFileSync('./content/first.txt', 'utf8')
// const second  = readFileSync('./content/second.txt', 'utf8')
// console.log(first, second);

// writeFileSync(
//     './content/result-sync.txt', 
//     `Here is the result ${first}, ${second}`,
//     {flag: 'a'}
// )

// ? fs Module(async)
// const {readFile, writeFile} = require('fs')
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return
//     } 
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//         console.log(err);
//         return
//         } 
//         const second = result;
//         writeFile(
//             './content/result-async.txt', 
//             `Here is the result ${first}, ${second}`,
//             (err, result) => {
//                 if (err) {
//                     console.log(err);
//                     return                    
//                 }
//                 console.log(result);
                
//             }
//         )
//     })
// })   

// ? Http modules
// create my own http on browser
// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//     res.end('Welcome to our home page')
//     } else if (req.url === '/about') {
//         res.end('Here is our short history')
//     } else {
//         res.end(`
//             <h1>Oops!</h1>
//             <p>We can't seem to find the page you are looking for</p>
//             <a href="/">back home</a>
//         `)
//     }
// })

// server.listen(5000)

//? npm command
// local dependency - use it only in this particular project
// npm i <packageName> 
console.log('Hello World my friends');
