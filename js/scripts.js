
//-----------Script boton "ir arriba"----------------//

$(document).ready(function(){

    $(".up").click(function(){
        $("body, html").animate({
            scrollTop: "0px"
        }, 900);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0){
            $(".up").slideDown(300);
        } else {
            $(".up").slideUp(300);
        }        
    });
});    


//-----------COLAPSAR (Sin utilizar) ----------------//
var coll = document.getElementsByClassName("colapsado");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
