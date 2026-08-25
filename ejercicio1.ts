// Objetivo : Implementar un patrón Singleton para gestionar un inventario de equipos informáticos.

// Cree una clase Inventarioque siga el patrón Singleton.
// Esta clase debe permitir registrar equipos con las propiedades nombre, tipoy estado(Ej.: "disponible", "en reparación").
// Agregar un método agregarEquipopara agregar equipos y un método listarEquipospara devolver la lista completa de equipos registrados.
// Definir un tipo de interfaz Equipo( nombre, tipo, estado) para tipar los equipos registrados.
// Ejemplo de salida esperada:

// const  inventario  =  Inventario . obtenerInstancia ( ) ;
// inventario . agregarEquipo ( "Notebook HP" ,  "Portátil" ,  "disponible" ) ;
// consola . log ( inventario.listarEquipos ( ) ) ;​​ // [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]
