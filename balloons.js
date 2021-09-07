$(function(){
    //$('#birthday').pickadate({ format: 'mmmm, d' });

        //CREATE ANIMATIONS FOR BALLOONS -----------------------------
        $('.form-check-input').on('change', function () {
            // make the image visible
            $('#' + this.id + 'Img').css('visibility', 'visible')
            
            // animate balloon in/out based on checkbox
            $(this).is(':checked') ?
                $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
                $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
        });

    //CREATE RANDOM ANIMATION ON PAGE LOAD -----------------------------
    //Now that I look at it I probably could've made an array.
    function randomizeTitleAnimation(){
        var randomNumber = Math.floor(Math.random() * 5);

        if(randomNumber === 0) {

            $('#title').removeClass().addClass('animate__animate__shakeX');
            $('#title').addClass('animate__animated animate__shakeX');

        } else if(randomNumber === 1) {
            
            $('#title').removeClass().addClass('animate__animated animate__shakeY');
            $('#title').addClass('animate__animated animate__shakeY');

        } else if(randomNumber === 2) {

            $('#title').removeClass().addClass('animate__animated animate__tada');
            $('#title').addClass('animate__animated animate__tada');

        } else if(randomNumber === 3) {

            $('#title').removeClass().addClass('animate__animated animate__pulse');
            $('#title').addClass('animate__animated animate__pulse');

        } else if(randomNumber === 4) {

            $('#title').removeClass().addClass('animate__animated animate__rubberBand');
            $('#title').addClass('animate__animated animate__rubberBand');

        }
    }

    randomizeTitleAnimation();

    //TOAST ON SUBMIT IF NO CHECK-BOXES ARE CHECKED --------------------------------
    $('#submit').on('click', function(e) {
        e.preventDefault();

        if($('#red').is(':checked') || $('#green').is(':checked') || $('#blue').is(':checked')){
            $('#toast').toast({ autohide: true }).toast('hide');
        } else {
            $('#toast').toast({ autohide: false }).toast('show'); //MAKE THIS
        }
    });

    //UNCHECK ALL BOXES/CHECK ALL BOXES -----------------------------
    $('#checkAll').on('click', function() {

        if($('#red').is(':checked') && $('#blue').is(':checked') && $('#green').is(':checked')) {
            $(":checkbox").attr("checked", false);
        } else {
            $(":checkbox").attr("checked", true);
        }
    });

    //HOVER FOR DIFFERENT COLORS -----------------------------
    $("label[for=red], #red").on('mouseover', function() { 

        let changeColorRed = document.querySelector("#title");
        changeColorRed.style.color = "red";

    }).mouseout(function() {
        let changeColorRed = document.querySelector("#title");
        changeColorRed.style.color = "slategray";
    });

    $("label[for=blue], #blue").on('mouseover', function() { 

        let changeColorRed = document.querySelector("#title");
        changeColorRed.style.color = "blue";

    }).mouseout(function() {
        let changeColorRed = document.querySelector("#title");
        changeColorRed.style.color = "slategray";
    });

    $("label[for=green], #green").on('mouseover', function() { 

        let changeColorRed = document.querySelector("#title");
        changeColorRed.style.color = "green";

    }).mouseout(function() {
        let changeColorRed = document.querySelector("#title");
        changeColorRed.style.color = "gray";
    });

    //ALTERNATIVE TO CLOSE TOAST -----------------------------

    $(document).on('keyup', function(e) {
        if (e.key == "Escape") {
            $('#toast').toast('hide');
        }
    });

});