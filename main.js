

const oferta = prompt("¿Te gustaría recibir nuestras ofertas?").toLowerCase();

if (oferta === "si") {
  alert("Gracias. Ahora le pediremos unos datos!");

  let nombre = '';
  while (nombre === '') {
    nombre = prompt("Ingresa tu nombre");
    if (nombre === '') {
      alert("Debes ingresar tu nombre.");
    }
  }
  console.log(`Tu nombre es ${nombre}`);

  let apellido = '';
  while (apellido === '') {
    apellido = prompt(`Muchas gracias ${nombre}. Ahora podrías decirme tu Apellido?`);
    if (apellido === '') {
      alert("Debes ingresar tu apellido.");
    }
  }
  console.log(`Tu apellido es ${apellido}`);

  const listaJuegos = [
    { juego: "The Legend of Zelda: Breath of the Wild", precio: 30000},
    { juego: "Red Dead Redemption 2", precio: 30000},
    { juego: "Halo Infinite", precio: 30000},
    { juego: "Call Of Duty: Modern Warfare II", precio: 30000},
    { juego: "Grand Theft Auto V", precio: 20000},
    { juego: "The Last Of Us", precio: 10000},
    { juego: "Far Cry 6", precio: 15000},
    { juego: "Diablo IV", precio: 40000},
    { juego: "Final Fantasy XVI", precio: 50000}

  ];

  const juegosSeleccionados = []; 

  let seguirComprando = true;
  while (seguirComprando) {
    let juegoInteres = prompt(`Gracias por elegirnos ${nombre} ${apellido}. Ingresa el juego que te interese (o escribe 'terminar' para finalizar la compra)`);

    if (juegoInteres.toLowerCase() === 'terminar') {
      seguirComprando = false;
    } else {
      let juegoEncontrado = false;
      for (let i = 0; i < listaJuegos.length; i++) {
        if (listaJuegos[i].juego.toLowerCase() === juegoInteres.toLowerCase()) {
          juegosSeleccionados.push(listaJuegos[i].juego);
          juegoEncontrado = true;
          break;
        }
      }
      if (!juegoEncontrado) {
        alert(`Lo sentimos, ${nombre}. El juego "${juegoInteres}" no se encuentra en nuestra tienda.`);
      }
    }
  }

  let totalCompra = 0;
  for (let i = 0; i < juegosSeleccionados.length; i++) {
    for (let j = 0; j < listaJuegos.length; j++) {
      if (listaJuegos[j].juego === juegosSeleccionados[i]) {
        totalCompra += listaJuegos[j].precio;
        break;
      }
    }
  }

  if (juegosSeleccionados.length > 0) {
    alert(`¡Excelente elección, ${nombre}! Has seleccionado los siguientes juegos:\n- ${juegosSeleccionados.join("\n- ")}\nEl total de tu compra es: $${totalCompra}. ¡Disfruta de tu experiencia en nuestra tienda de videojuegos!`);
  } else {
    alert(`Gracias, ${nombre}. No has seleccionado ningún juego en esta compra.`);
  }
} else {
  alert("Gracias y bienvenido/a");
}