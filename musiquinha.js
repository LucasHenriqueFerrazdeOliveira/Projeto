let musica;

function preload(){
  musica = loadSound("fundo.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}