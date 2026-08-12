// Starter file — add your code here
const { error } = require('console');
const fs = require('fs');
const fspromis = require('fs/promises');
const crypto = require('crypto')
const os = require('os');
const path = require('path');
// console.log(fs);

const poem = fs.readFileSync('assets/poem.txt', {encoding:'utf8'});
console.log(poem.toString());


fs.readFile('assets/poem.txt', {encoding:'utf8'}, (data, error)=>{
    console.log(data);
})

async function readFileWithPromise(){
    try{
       const data= await fspromis.readFile('assets/poem.txt', {encoding:'utf8'});
        console.log(data);
    }catch(error){
        console.error(error)
    }
}

fs.writeFileSync('assets/output.txt', 'Hello, freeCodeCamp!', {encoding:'utf8'});
fs.appendFileSync('assets/output.txt', '\n Added line to the file');
const checkExit = fs.existsSync('assets/output.txt');
console.log(checkExit);

const entries = fs.readdirSync('assets');
console.log(entries);

const buff = Buffer.from("Hello, Node!");
console.log(buff);

console.log(buff.toString('hex'));
console.log(buff.toString('base64'));

const buf2 = Buffer.alloc(8, 0xff);
console.log(buf2);

const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
console.log(decoded);

const hashed = crypto.createHash('sha256').update('freeCodeCamp!').digest('hex');
console.log(hashed);

const randomNumber = crypto.randomBytes(16).toString('hex')
console.log(randomNumber)

const id = crypto.randomUUID();
console.log(id);

const platform = os.platform();
const arch = os.arch();
const hostname = os.hostname();

console.log(platform);
console.log(arch);
console.log(hostname);

const freeto = os.freemem();
const totalmemory = os.totalmem();
const uptime = os.uptime();

console.log(freeto);
console.log(totalmemory);
console.log(uptime);

console.log(os.cpus().length);

const joinPath = path.join(__dirname,'assets', 'poem.txt')
console.log(joinPath);

const base = path.basename('server.js');
const dir = path.dirname('server.js');
const extname = path.extname('server.js');

console.log(base);
console.log(dir);
console.log(extname);

const joPath = path.join('assets', '..', 'server.js')
const resolvePath = path.resolve('assets', '..', 'server.js');

console.log(joPath);
console.log(resolvePath);

const parsePath = path.parse('Server.js');
console.log(parsePath)
//  process.version, process.platform, and process.env.NODE_ENV,

console.log(process.version)
console.log(process.platform)
console.log(process.env.NODE_ENV)

console.log(process.argv)

process.stdout.write('Hello from stdout\n')
process.stderr.write('Hello from stderr\n')

const readstreams = fs.createReadStream('assets/poem.txt', {encoding:'utf8'});
readstreams.on('data', (datas)=>console.log(datas));
readstreams.on('end', ()=>console.log("Data successfully ended."))

const writableStream = fs.createWriteStream('assets/stream-output.txt');

// writableStream.write('First Line\n');
// writableStream.write('Second Line\n');
// writableStream.end();

readstreams.pipe(writableStream);