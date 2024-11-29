//cambiar background color
$(document.body).on('click', function (e) {
    //si pulsamos en body pero no en hijos
    if (e.target != e.previousSibling) {
      cambiarColor()
     }
  })


  var content = document.getElementsByClassName("content");
  content.addEventListener("click", cambiarColor,false );

  
// document.getElementsByTagName("body").add
  
//   var el = document.getElementsByTagName("body")[0];
//   el.addEventListener("touchstart", cambiarColor, false);

  function cambiarColor() {
    //generamos un color hexadecimal aleatorio
    let simbolos, color
    simbolos = '0123456789ABCDEF'
    color = '#'

    for (let i = 0; i < 6; i++) {
      color = color + simbolos[Math.floor(Math.random() * 16)]
    }
    //asignamos el color al background
    document.body.style.backgroundColor = color

    document.getElementsByClassName("content").backgroundColor = color
    //tambien cambiamos el titulo y botones
//     document.getElementsByTagName('h1')[0].style.color = color
//     document.getElementsByTagName('button')[0].style.backgroundColor = color
//     document.getElementsByTagName('button')[1].style.backgroundColor = color
   }



