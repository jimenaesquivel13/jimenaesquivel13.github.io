let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#ff0f60";> Soy estudiante de Desarrollo de Software Multiplataforma y creo sitios web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  
  .start();
