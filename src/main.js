import { Giphy } from './../src/giphy';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){

  let giphyObject = new Giphy();
  let giphyPromise = giphyObject.getGiph();

  giphyPromise.then(function(response){
    let body = JSON.parse(response);
    let specificGif = body.data[2].embed_url
    $("#gif").append(`<iframe src="${specificGif}" width="480" height="327" frameBorder="0" allowFullScreen></iframe>`);
  }, function(error){
    $(".gifError").text(`There was error processing your request: ${error.message}`);
  });


})
