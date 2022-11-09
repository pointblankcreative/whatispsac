import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../node_modules/popper.js/dist/popper.min.js";
import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";

// import { createWidget } from '@typeform/embed';
// import '@typeform/embed/build/css/widget.css';

// createWidget('<form-id>', options);


$(document).ready(function() {

// Gets the video src from the data-src on each button

var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);


// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. 
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
})



// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
}) 
    
    


  
  
// document ready  
});


