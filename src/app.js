window.onload = function () {
  const palos = ["♥", "♦", "♠", "♣"];
  const clasesPalos = ["heart", "diamond", "spade", "club"];
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const carta = document.getElementById("carta");
  const valorCarta = document.getElementById("valor-carta");

  const paloArribaIzq = document.getElementById("palo-arriba-izq");
  const paloAbajoDer = document.getElementById("palo-abajo-der");

  const indicePalo = Math.floor(Math.random() * palos.length);
  const simboloPalo = palos[indicePalo];
  const clasePalo = clasesPalos[indicePalo];
  const valor = valores[Math.floor(Math.random() * valores.length)];

 
  carta.classList.remove("heart", "diamond", "spade", "club");

  
  carta.classList.add(clasePalo);

  
  valorCarta.innerText = valor;
  paloArribaIzq.innerText = simboloPalo;
  paloAbajoDer.innerText = simboloPalo;
};
