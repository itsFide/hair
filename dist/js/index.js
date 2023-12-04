$(document).ready(function () {




    $("#zip").on('keyup', function (e) {
        e.preventDefault();
        const val = $(this).val();
        $.get('https://api.zippopotam.us/US/' + val, function (data) {
            $("#city").val(data.places[0]['place name']);
            $("#state").val(data.places[0]['state abbreviation']);
        }, 'json');
    });


    // Input mask
    $("#phone").inputmask("+1 (999) 999-9999")
    $(".mask_card").inputmask("9999 9999 9999 9999");
    $(".mask_date").inputmask("99 / 99");
    // $(".mask_cvc").inputmask("999");

    // Popup
    $(".popup__link-term-conditions").click(function (e) {
        e.preventDefault();
        $("body").addClass("lock");
        $(".popup").removeClass("open");
        $(".popup-term-conditions").addClass("open");
    });
    $(".popup__link-privacy").click(function (e) {
        e.preventDefault();
        $("body").addClass("lock");
        $(".popup").removeClass("open");
        $(".popup-privacy").addClass("open");
    });
    $(".popup__link-shipping").click(function (e) {
        e.preventDefault();
        $("body").addClass("lock");
        $(".popup").removeClass("open");
        $(".popup-shipping-policy").addClass("open");
    });
    $(".popup__link-return").click(function (e) {
        e.preventDefault();
        $("body").addClass("lock");
        $(".popup").removeClass("open");
        $(".popup-return-policy").addClass("open");
    });
    $(".popup__close, .popup__bg").click(function () {
        $("body").removeClass("lock");
        $(".popup").removeClass("open");
    });




});
