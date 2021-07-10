function transform(arg) {
    if (arg <= 1) {
      return 1
    } else {
      return arg * transform(arg - 1)
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
//
//
//
//
//
//
//
//
console.log(transform(0));
console.log(transform(1));
console.log(transform(2));
console.log(transform(3));
console.log(transform(4));
console.log(transform(5));