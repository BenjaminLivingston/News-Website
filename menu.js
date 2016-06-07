$(function(){

    $("ul.dropdown li").mouseover(function(){
    
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
    
    }, mouseout(function(){
    
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
    
    });)
    
    $("ul.dropdown li ul li:has(ul)").find("a:first");//.append(" &raquo; ");

});