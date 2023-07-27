const fs = require('fs')

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf-8'})

const ws = fs.createWriteStream('./files/new-lorem.txt')


//call the rs,ws to read and write the datachunk
// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

//better way to copy and paste the data
rs.pipe(ws);
