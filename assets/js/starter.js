import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../node_modules/popper.js/dist/popper.min.js";
import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";

// import { createWidget } from '@typeform/embed';
// import '@typeform/embed/build/css/widget.css';

// createWidget('<form-id>', options);

$(function () {

    // Gets the video src from the data-src on each button
    var $videoSrc;
    $('.video-btn').on('click', function () {
        $videoSrc = $(this).data("src");
        console.log($videoSrc);
        $('#myModal').modal('show');
    });
    
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {

        // set the video src to autoplay and not to show related video. 
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })

    // document ready  
    function copyLink() {
    const copyText = document.getElementById('copyText');
    console.log(copyText)
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Don't let Doug Ford speak for you: Copied to Clipboard");
}
});

