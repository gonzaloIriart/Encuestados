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
    console.log('controlador click')
    this.modelo.agregarVoto(nombrePregunta,respuestaSeleccionada);
  },
  obtenerLista: function(){
    var guardado = localStorage.getItem('preguntas');
    return JSON.parse(guardado);
  }

};
