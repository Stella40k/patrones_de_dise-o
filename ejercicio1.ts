// Objetivo : Implementar un patrón Singleton para gestionar un inventario de equipos informáticos.

// Cree una clase Inventarioque siga el patrón Singleton.
// Esta clase debe permitir registrar equipos con las propiedades nombre, tipoy estado(Ej.: "disponible", "en reparación").
// Agregar un método agregarEquipopara agregar equipos y un método listarEquipospara devolver la lista completa de equipos registrados.
// Definir un tipo de interfaz Equipo( nombre, tipo, estado) para tipar los equipos registrados.
// Ejemplo de salida esperada:

// const  inventario  =  Inventario . obtenerInstancia ( ) ;
// inventario . agregarEquipo ( "Notebook HP" ,  "Portátil" ,  "disponible" ) ;
// consola . log ( inventario.listarEquipos ( ) ) ;​​ // [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]

//AdminInventario es como la fabrica completa
//el objeto q CREA esa fabrica son los admin1 y admin2, como si fuera el producto real fisico
//los metodos normales son las acciones q solo puedo hacer CON EL OBJETO FISICO. No puedo manipular
//como un todo UNA FABRICA pero si un producto de esa fabrica

//agregarProducto es un metodo normal (la accion)
//los metodos estaticos son como preguntas o acciones q le hago directamente A LA FABRICA, no al producto,
//este metodo no afecta al producto no importa si el producto existe para llamar a la fabrica y consultar algo

//ahora, segun la logica aca,si no tengo un producto no puedo usar los metodos normales

//llamo a la fabrica(la clase) usando el metodo estatico porque no puedo usar un new para crear el objeto por mi cuenta
//tengo q comiunicarme con la clase si o si para acceder a ella y construir segun sus reglas
class AdminInventario {
  //private: medida de seguridad (encapsulamiento), solo las variables pueden ser vistas
  //y modificadas dentro de esta misma clase

  //metodos => acciones q ocurren en lo q yo guardo o construyo
  //static
  private static instancia: AdminInventario;
  private inventario: { [producto: string]: number } = {};

  //los constructores reciben datos y preparan el objeto, este esta vacio porque ya
  //viene configurado arriba

  //para que el patron singleton solo debe existir un unico inventario en toda la app
  //al usar un cnstructor privado evito la creacion libre con new
  private constructor() {}

  //esta es la logica q controla q solo exista un inventario en todo el codigo

  public static obtenerInstancia(): AdminInventario {
    if (!AdminInventario.instancia) {
      AdminInventario.instancia = new AdminInventario();
    }
    return AdminInventario.instancia;
  }
  public agregarProducto(producto: string, stock: number): void {
    this.inventario[producto] = stock;
  }
  public listarProductos(): { [producto: string]: number } {
    return this.inventario;
  }
}

const admin1 = AdminInventario.obtenerInstancia();
const admin2 = AdminInventario.obtenerInstancia();

admin1.agregarProducto("labial", 6);
admin2.agregarProducto("rimel", 6);

console.log(admin1 === admin2);
console.log(admin1.listarProductos());
