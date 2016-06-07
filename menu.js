$(document).ready(function () {

    $("ul.dropdown").mouseover(function () {
        $("ul.submenu").children().hide(1000);
    });

});