var x = ["a","b","c","t"];
var y = ["d","a","t","e","g"];

myArray = x.filter( function( el ) {
  return y.indexOf( el ) < 0;
});
console.log(myArray);