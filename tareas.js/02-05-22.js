class Producto {
    constructor(codigo, nombre, precio=0) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimirDatos(valores) {
        document.write("---------Valores de los productos--------");
        document.write(`Código: ${this.codigo}`);
        document.write(`Nombre: ${this.nombre}`);
        document.write(`Precio: ${this.precio}`);
        
      
    }
}
let galleta = new Producto("1125", "merengadas", "150");
let hamburguesa = new Producto("386563", "paladini", "350");
let fideo = new Producto("4485136", "marolio","125");
    
let arregloProd = [
    {
    codigo: "1125",
    nombre: "Merengadas",
    precio: "$150",
    },
    {
    codigo:"386563",
    nombre: "Paladini",
    precio: "$125",
    },
    {
    codigo: "4485136",
    nombre: "Marolio",
    precio: "$125",
    },
];
   
       arregloProd.forEach(function(valores){
   
        document.write(`<b> Código:</b> ${valores.codigo}<br />`);
        document.write(`<b>Nombre:</b> ${valores.nombre}<br />`);
        document.write(`<b>Precio:</b>: ${valores.precio}`);
    });


    class Producto {
        constructor(codigo, nombre, precio) {
            this.codigo = codigo,
                this.nombre = nombre,
                this.precio = precio
        }
    
        imprimirDatos(valores) {
            for (let i = 0; i < valores.length; i++) {
                const element = valores[i];
                const obj =
                    `${element.nombre} = ${element.precio} <br> 
                    <p style='margin: 0; padding: 0'>
                    <small> codigo: ${element.codigo}</small></p> <br>`
                document.write(obj)
            }
        }
    }
    
    let instancias1 = new Producto('123', 'gaseosa', 150)
    let instancias2 = new Producto('456', 'pan', 200)
    let instancias3 = new Producto('789', 'jugo', 50)
    
    const arrayInstancias = [instancias1, instancias2, instancias3]
    
    instancias1.imprimirDatos(arrayInstancias)


