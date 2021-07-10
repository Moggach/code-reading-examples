function transform(arg) {
    if (arg === 1) {
      return 0;
    } else if (arg === 2) {
      return 1; 
    } else {
      return transform(arg - 1) + transform(arg - 2)
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