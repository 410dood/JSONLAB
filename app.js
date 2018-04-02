var endpoint = 'https://api.spotify.com/v1/search?q=goodbye&type=artist'

// click event on button
$('button').on('click', function(event) {
  $.get(endpoint, (data) => {
    onClickReqSuccess(data)
  })
});

function onClickReqSuccess(data){
  console.log(responseData);
  // process data
}



// submit event on form
$('form').on('submit', function(event){
  event.preventDefault();
  $.ajax({
    method: 'GET',
    url: endpoint,
    data: 'q=cats',
    dataType: 'json',
    success: onSubmitReqSuccess
  });
});

function onSubmitReqSuccess(responseData){
  console.log(responseData);
  // process data
}
