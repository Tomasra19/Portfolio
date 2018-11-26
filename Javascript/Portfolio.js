$(function () {
    $('.item').hide();
    $('.javaImg').show();


    $('.csharpas').click(function () {
        $('.item').hide();
        $('.csharpasImg').show();
        $('csharpas').toggleClass('.active');
    });

    $('.java').click(function () {
        $('.item').hide();
        $('.javaImg').show();
    });

    $('.web').click(function () {
        $('.item').hide();
        $('.webImg').show();
    });

    // lempute
    var state = false;
    $('.lempa').click(function () {

        if (state) {
            $('.lempa').attr('src', 'lightbulbOff.png');
        } else {
            $('.lempa').attr('src', 'lightbulbOn.png')
        }
        state = !state;
    });
});
// img padidinimas
$('.enlarge').hover(function(){
    $(this).addClass('transition');
},function(){
    $(this).removeClass('transition');
});
// aktyvus logo
$(".techlogo").click(function () {
    $(this).addClass("active");
    $(".techlogo").not(this).removeClass("active");
});

// var activesheet = $('.active').attr('src');
//
// $(activesheet).show();
//
// $('.techlogo').click(function () {
//     $('.item').hide();
//     activesheet = $(this).attr('href');
//     $(activesheet).show();
// });

// Get the container element
// var btnContainer = document.getElementById("tNav");
//
// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("techlogo");
//
// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }