// Obtener todos los elementos con la clase .close
let links = document.querySelectorAll('.close');

// Recorrer los elementos y agregar un evento click a cada uno
links.forEach(function(link){
    // Agregar evento click a cada elemento
    link.addEventListener("click", function(ev){
        // Prevenir el comportamiento predeterminado del enlace
        ev.preventDefault();

        // Obtener el elemento con la clase .content
        let content = document.querySelector('.content');
        
        // Quitar las clases de animación que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        // Agregar clases para animar su salida fadeOutUp
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        // Redireccionar después de 600 milisegundos (0.6 segundos)
        setTimeout(function(){
            location.href = "/";
        }, 600);

        // Devolver false para evitar que el enlace se siga
        return false;
    });
});

function ordenarPorCalificacion(orden) {
    const table = document.querySelector('.table tbody');
    const rows = Array.from(table.querySelectorAll('tr'));
  
    rows.sort((a, b) => {
      const starsA = obtenerCantidadEstrellas(a);
      const starsB = obtenerCantidadEstrellas(b);
  
      if (orden === 'asc') {
        return starsA - starsB;
      } else {
        return starsB - starsA;
      }
    });
  
    // Reordenar las filas en la tabla
    rows.forEach(row => table.appendChild(row));
  }
  
  function obtenerCantidadEstrellas(row) {
    const stars = row.querySelectorAll('.fa-solid.fa-star').length;
    const halfStars = row.querySelectorAll('.fa-solid.fa-star-half-stroke').length / 2;
    return stars + halfStars;
  }
  