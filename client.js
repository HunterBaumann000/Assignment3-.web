$(function(){
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();

        // first pause the audio in case it is still playing
        toast.pause();
        toast.currentTime = 0;
        toast.play();

        $('#toast').toast({ autohide: false }).toast('show');

        //stores information into toast from cde and product attributes
        $('#product').html($(this).data('product'));
        $('#code').html($(this).data('code'));
    });

    $(document).on('keyup', function(e) {
        
        if (e.key == "Escape") {

            $('#toast').toast('hide');
        }

    });
});