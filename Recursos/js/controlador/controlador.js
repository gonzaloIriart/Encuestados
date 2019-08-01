/*
 * Controlador
 */
var Controlador = function(modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function(pregunta, respuestas) {
    if(pregunta.length > 0 && respuestas.length > 0){
      this.modelo.agregarPregunta(pregunta, respuestas);
    }else{
      alert('La pregunta o respuesta no pueden estar vacias')
    }
    
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
