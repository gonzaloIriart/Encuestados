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
  agregarVotos: function(nombrePregunta,respuestaSeleccionada){
    this.modelo.agregarVoto(nombrePregunta,respuestaSeleccionada);
  },
  obtenerLista: function(){
    var guardado = JSON.parse(localStorage.getItem('preguntas'));
    if(guardado === null){
      guardado = [];
    }
    return guardado;
  }

};
