const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), 'utf8')
        console.log(data)
        //unlink function is to delete a file
        await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"))
        await fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data)
        await fsPromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), '\n\nNice to meet you')
        await fsPromises.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "promiseComplete.txt"))
        const newData = await fsPromises.readFile(path.join(__dirname, "files", "promiseComplete.txt"), 'utf8')
        console.log(newData)
    } catch (error) {
        console.error(error)
    }
}

fileOps();


//ReadFile
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),"utf8",(err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// console.log("Hello...");

// //write file
// fs.writeFile(path.join(__dirname, "files", "reply.txt"), 'Nice to meet you',(err) => {
//   if (err) throw err;
//   console.log('Write complete');

//   //trying to modify reply
//   fs.appendFile(path.join(__dirname, "files", "reply.txt"), '\n\nYes it is',(err) => {
//     if (err) throw err;
//     console.log('Append complete');

//         fs.rename(path.join(__dirname, "files", "reply.txt"), path.join(__dirname, "files", "newReply.txt"),(err) => {
//                 if (err) throw err;
//                 console.log('Rename complete');
//        });
//   });
// });

//updating file
// fs.appendFile(path.join(__dirname, "files", "test.txt"), 'Testing text',(err) => {
//   if (err) throw err;
//   console.log('Append complete');
// });

//exit on uncauht errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncauht error: ${err}`);
  process.exit(1);
});
