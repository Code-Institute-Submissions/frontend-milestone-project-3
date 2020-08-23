$(".nav-link").mouseover(function() { // on .nav-link hover
    var hoverImage = $(this).data("img"); // save the data-img attribute
    showImg(hoverImage); // call the function below and pass the variable to it
});

function showImg(hoverImage) { // function accepts a parameter of 'hoverImage' variable
    $("#menu-image").attr("src", hoverImage); // update the #menu-image attribute of 'src' and use the variable being passed through
}
