$(".nav-link").mouseover(function() { 
    var hoverImage = $(this).data("img");
    showImg(hoverImage); 
});

function showImg(hoverImage) { 
    $("#menu-image").attr("src", hoverImage);
}
