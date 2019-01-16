import { Giphy } from './../src/giphy';
import { Dino } from './../src/dinosaur';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){

  let giphyObject = new Giphy();
  let giphyPromise = giphyObject.getGiph();

  giphyPromise.then(function(response){
    let body = JSON.parse(response);
    let specificGif = body.data[24].embed_url
    $("#gif").append(`<iframe src="${specificGif}" width="480" height="327" frameBorder="0" allowFullScreen></iframe>`);
  }, function(error){
    $(".gifError").text(`There was error processing your request: ${error.message}`);
  });

  let dinoObject = new Dino();
  let dinoPromise = dinoObject.getDino();


  dinoPromise.then(function(response){
    let body = JSON.parse(response);
    let array = body[0];
    console.log(array);
    array.forEach(function(name, index){
      $("#dino").append(`<li id=${index}>${name}</li>`);
    });
  }, function(error){
    $(".dinoError").text(`There was an error processing your request: ${error.message}`);
  });

})
