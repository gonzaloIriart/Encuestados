/*
 * Controlador
 */
var Controlador = function(modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function(pregunta, respuestas) {
    this.modelo.agregarPregunta(pregunta, respuestas);
  },
  borrarPregunta: function(id) {
    this.modelo.borrarPregunta(id);
  },
  borrarTodo: function(){
    this.modelo.borrarTodasLasPreguntas();
  },
  agregarVoto: function(nombrePregunta,respuestaSeleccionada){
    this.modelo.agregarVoto(nombrePregunta,respuestaSeleccionada);
  }

};
