const args = process.argv.slice(2);

for (const arg of args){
  if (arg < 0 || isNaN(arg)) {
    break;
  }
  let time = arg * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  },time);
}

