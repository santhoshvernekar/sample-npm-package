function randomNumberGenerator(min, max) {
  if(typeof(max) !== 'number' && typeof(min) !== 'number') {
    min = 0;  max = 1;
  }
  console.log("Number Generation Started from Santhosh's Package");
 return (Math.random() * (max-min)) + min;
}
module.exports = randomNumberGenerator