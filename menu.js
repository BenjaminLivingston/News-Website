$(document).ready(function () {

    $("#sub_menu").find("li").hide();

    $("#dropdown").mouseover(function () {
        $("#sub_menu").find("li").show();
    });

    $("#dropdown").mouseout(function () {
        $("#sub_menu").find("li").hide();
        $("#sub_menu").mouseover(function () {
            $("#sub_menu").find("li").show();
        });
    });

    $("#sub_menu").mouseout(function () {
        $("#sub_menu").find("li").hide();
    });
    
});