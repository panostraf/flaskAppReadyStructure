
const total_delay = 3000


function changelang(){

}

function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },total_delay);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },total_delay);
}
function showgallery(){
    $("#gallery_container").css("display","inherit");
    $("#gallery_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#gallery_container").removeClass("animated slideInRight");
    },total_delay);
}
function closegallery(){
    $("#gallery_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#gallery_container").removeClass("animated slideOutRight");
        $("#gallery_container").css("display","none");
    },total_delay);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },total_delay);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },total_delay);
}


setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#gallery").removeClass("animated fadeIn");
    },200);
},800);
