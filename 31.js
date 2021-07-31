//What is the expected output of this code?
JSON.stringify(Promise.resolve(5));

//How about this?

JSON.parse(JSON.stringify(Promise.resolve(5)));

//If we run this code in our browser console what will we see?

new Promise((resolve) => {
  /* don't call resolve */
});
