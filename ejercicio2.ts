// Ejercicio 2: Implementar Patrón Factory Method para Crear Equipos
// Objetivo : Utilizar el patrón Factory Method para crear diferentes tipos de equipos.

// Crear una clase EquipoFactorycon un método crearEquipoque, basado en el tipo de equipo ("Notebook", "Desktop", "Servidor"), devuelva una instancia de la clase adecuada.
// Crear clases específicas para cada tipo de equipo ( Notebook, Desktop, Servidor), cada una con sus propias propiedades (Ej.: ram, procesador).
// Estas clases deben extenderse de una clase abstracta común que declare el método detalles(), para que crearEquipodevuelva siempre un tipo uniforme sin importar el equipo concreto que construya.
// Ejemplo de salida esperada:

//  fábrica  constante =  nueva  EquipoFactory ( ) ; 
// const  Cuaderno  =  fábrica . crearEquipo ( "Notebook" ,  "Dell XPS" ,  "16GB" ,  "i7" ) ; 
// consola . log ( Cuaderno.detalles ( ) ) ;​​ // Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Pr


//CLASE MADRE

//creo el molde del equipo
//las clases abstractas son como moldes o plantillas q no se puden usar para crear objetos directamente
//sirve como base para q oreas clases hereden lo de ella

//al ponerle el abstract antes de la clase le digo al ts q esta prohibido estrictamente q alguien escriba new Equipo (como el de singlenton)
//esta clase no es para fabricar objetos realos sino solo un molde base para q otras clases hereden lo de ellas
//(un extend como en los graficos de flujos)
abstract class Equipo{
    constructor( 
        //public todos lo ven
        //private solo la propia clase lo puede ver
        //protected es como un secreto en familia
        //si las variables fueran privadas spñp una clase se podria usar y no se heredarian

        protected nombre: string,
        protected ram: string,
        protected procesador: string
    ){}

    //cuando le pongo un abstact a un metodo no describo una accion sino una ley, la clase madre dicta q cualqioer
    //clase q quiera ser parte de la "familia" debe estar obligado a inventar un metodo llamado detalles()
    //aca HEREDAN sus hijas 
    abstract detalles(): string;
}

//CLASE EQUIPO

//son clases especificas, cuando la consigna hable de clases especificas debo saber q habla de clases abstractas madres e hijos 
//q heredan lo de la madre

//creo clases especificas para cada tipo de equipo
//la palabra extend dice "yo pertenezco a tal familia"en este caso, a la familia Equipo

class EquipoFactory{
    //lo q v dentro de los () SON PARAMETROS/ARGUMENTOS
    //es la materia prima q le tengo q pasar al metodo para hacer un producto o algo

    //la palabra public es para q cualquiera pueda construir su propio equipo

    //":Algo" se llama tipo retorno, es como una promesa q hace el metodo
    //Lo puedo leer como "te prometo q cuando termine de trabajr y use el return, te tiro un objeto de la familia "Algo"
    //en este caso sera de la familia "Equipo", viene a ser la CALSE MADRE 
    //al ponerle :Equipo (clase madre abstracta (ver mas de clases abstractos pq todavia no entiendo bien)) le digo "no se cua de los 
    //tres parametros (o mas segun el codigo) te voy a dar pero prometo q sera un equipo valido" 
    public crearEquipo(tipo: string, nombre: string, ram: string, procesador: string):Equipo {
        switch(tipo){
            case "Fisico":
                return new 
        } 
    }
    
}