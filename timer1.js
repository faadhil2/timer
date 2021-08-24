const myArgs = process.argv.slice(2);
const start = Date.now();

for(let elem of myArgs){
  let temp = parseInt(elem, 10);

  if (temp < 0 || !Number.isInteger(temp)){
    continue;
  } else{
  setTimeout(function(){
    process.stdout.write('\x07')
    console.log("This took:", Date.now() - start, "ms");
  ;}, elem * 1000)
  }
};