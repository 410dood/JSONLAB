// $.ajax({
//   // What kind of request
//   method: 'GET',

//   // The URL for the request
//   url: 'https://kickflip-api.herokuapp.com/tricks',

//   // The type of data we want back
//   dataType: 'json',

//   // Code to run if the request succeeds; the JSON
//   // response is passed to the function as an argument.
//   success: onSuccess
// });

// // defining the callback function that will happen
// // if the request succeeds.
// function onSuccess(responseData) {
//     console.log(responseData[3]);
//     // celebrate!
// };

$.get("https://kickflip-api.herokuapp.com/tricks", (response) => {
  processResponse(response);
});
console.log(response[3])
