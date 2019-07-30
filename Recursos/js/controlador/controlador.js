/*
 * Controlador
 */
var Controlador = function(modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function(pregunta, respuestas) {
    if(pregunta !== '' && respuestas.includes('')){
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
    console.log('controlador click')
    this.modelo.agregarVoto(nombrePregunta,respuestaSeleccionada);
  },
  obtenerLista: function(){
    var guardado = localStorage.getItem('preguntas');
    return JSON.parse(guardado);
  }

};
