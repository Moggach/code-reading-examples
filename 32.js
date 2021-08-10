//What is the expected output of the below code? Why?
function compute() {
  return double(5).then(add3);
}

//Will the output of this function be the same or different? Why?
async function compute() {
  return add3(await double(5));
}
