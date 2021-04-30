$(document).ready(function() {
    $("img").click(function(){
        var change = $(this).attr("data-alt-src");
        $(this).attr("data-alt-src", $(this).attr("src"));
        $(this).attr("src", change);
    })
})