$(document).ready(function () {
    $.get('/Javascript/menu.json', function (data, status) {
        var a = '<img class="logo" src="logo.png" alt="TR">';
        for (var i = 0; data.length > i; i++) {
         a += '<a href="'+ data[i].Url + '">' + data[i].title + '</a>';
    }
    $('nav.top').html(a);
    console.log(status);
    })
});




// function renderMenu() {
//     var a = '';
//     for (var i = 0; menu.length > i; i++) {
//          a += '<a href="'+ menu[i].Url + '">' + menu[i].title + '</a>';
//     }
//     $('nav.top').html(a);
//     console.log(a);
//
//
// }
// renderMenu();




