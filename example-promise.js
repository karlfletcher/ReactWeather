// function getWeather(city, callback){
//   callback(undefined, 8);
//   callback('Couldnt find shit');
// }
//
// getWeather('Preston', function(err, temp){
//   if(typeof err === 'undefined'){
//     console.log(err);
//   }else{
//     console.log(`Temp: ${temp}`);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise((resolve, reject) => {
//     setTimeout(function(){
//       resolve(7);
//       reject("Couldnt find shit");
//     }, 1000);
//   })
// }
//
//
// getTempPromise('Preston').then(function(temp){
//   console.log(`Temp is: ${temp}`);
// }, function(err){
//   console.log(err);
// });


function addPromise(a, b){
  return new Promise((resolve, reject) => {
    if(typeof a === "number" && typeof b === "number"){
      resolve(a+b);
    }else{
      reject("One or more arguments weren't numeric");
    }
  })
}

addPromise(1, 2).then(function(result){
  console.log(`A + B = ${result}`);
}, function(err){
  console.log(err);
});
addPromise('1', 2).then(function(result){
  console.log(`A + B = ${result}`);
}, function(err){
  console.log(err);
});
