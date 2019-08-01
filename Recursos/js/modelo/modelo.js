/*
 * Modelo
 */
var Modelo = function() {
  this.preguntas = [];
  this.ultimoId = 0;

  //inicializacion de eventos
  this.preguntaAgregada = new Evento(this);
  this.preguntaBorrada = new Evento(this);
  this.borrarTodo = new Evento(this);
  this.agregarVotos = new Evento(this)
};

Modelo.prototype = {
  //se obtiene el id más grande asignado a una pregunta
  obtenerUltimoId: function() {
    return this.ultimoId++;
  },

  //se agrega una pregunta dado un nombre y sus respuestas
  agregarPregunta: function(nombre, respuestas) {
    var id = this.obtenerUltimoId();
    id++;
    var nuevaPregunta = {'textoPregunta': nombre, 'id': id, 'cantidadPorRespuesta': respuestas};
    this.preguntas = this.obtenerLista();
    this.preguntas.push(nuevaPregunta);
    this.guardar(this.preguntas);
    this.preguntaAgregada.notificar();
  },

  //se guardan las preguntas
  guardar: function(preguntas){
    localStorage.setItem('preguntas' , JSON.stringify(preguntas))
    this.preguntas = preguntas;
  },

  //borra una pregunta por su id
  borrarPregunta: function(id) {
    for(var i = 0;i< this.preguntas.length;i++){
      if(this.preguntas[i].id === id){
        this.preguntas.splice(i,1);
        this.guardar(this.preguntas);
        this.preguntaBorrada.notificar();
      }
    }
  },

  obtenerLista: function(){
    var guardado = JSON.parse(localStorage.getItem('preguntas'));
    if(guardado === null){
      guardado = [];
    }
    return guardado;
  },
  
  borrarTodasLasPreguntas: function() {    
      this.preguntas = [];
      this.guardar(this.preguntas);
      this.borrarTodo.notificar();    
  },

  agregarVoto: function(nombrePregunta,respuestaSeleccionada) {
    var preguntas = this.obtenerLista();
    var respuestas = preguntas.find(pregunta=>{
      return pregunta.textoPregunta === nombrePregunta;
    }).cantidadPorRespuesta;

    respuestas.find(rta=>{
      return rta.textoRespuesta === respuestaSeleccionada;
    }).cantidad++;

    this.guardar(preguntas);
    this.agregarVotos.notificar(nombrePregunta,respuestas);
    
  }
};
