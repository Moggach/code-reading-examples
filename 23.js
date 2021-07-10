function transform(arg) {
    if (arg === 1) {
      return 0;
    } else if (arg === 2) {
      return 1; 
    } else {
      let i = 0;
      let j = 1;
      for (let n=3;n<=arg;n++) {
        let k = i + j;
        i = j;
        j = k;
      }
      return j
    }
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
console.log(transform(1));
console.log(transform(2));
console.log(transform(3));
console.log(transform(4));
console.log(transform(5));
console.log(transform(6));
console.log(transform(7));
console.log(transform(8));
console.log(transform(9));
console.log(transform(10));
