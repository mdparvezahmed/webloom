const { log } = require('console');
const fs = require('fs')

// reading file

// console.log("st")
// fs.readFile("input.txt", "utf-8", (err, data)=>{
//     if(err) throw err;
//     console.log(data)
// });
// console.log("not waited")


// const data = fs.readFileSync("input.txt", "utf-8");
// console.log(data)


// //write file

// fs.writeFile("input.txt", "this is new file", (err)=>{
//     if(err) throw err;
// })


const readstream = fs.createReadStream("input.txt", "utf-8");


readstream.on('data', (chunk)=>{
    console.log(chunk)
})

readstream.on("end", ()=>{
    console.log("reading completed")
})


const writestream = fs.createWriteStream("output.txt");

readstream.pipe(writestream);