/* 
- Las promesas se crean usando un constructor llamado 'Promise'.
- Se pasa una función que recibe dos parámetros: resolve y reject.
- Dichos parámetros permiten indicar qué se resolvió o qué se rechazó. 
*/

// Las promesas tienen 3 estados:
// 1) PENDIENTE | Por defecto
// 2) RESUELTA  | resolve
// 3) RECHAZADA | reject


let x = 10;

console.log('1. Proceso iniciado...');

const promesa = new Promise((resolve, reject) =>{
    // 'setTimeout()' ejecuta una función luego de un período determinado en milisegundos, en este caso 1500ms
    // Lo utilizo para simular la respuesta de un servidor (asincronía)
    setTimeout(() =>{
        x = x * 3 + 2;
        
        if (x == 33){
            console.log('2. Proceso terminado...'); // Para que esto se muestre debemos modificar el valor a 32
            resolve(x); 
        }else{
            reject('Hubo un problema en el proceso');    
        }
    }, 1500);
});

promesa
    .then(respuesta =>{
        console.log('3. El resultado es: ' + respuesta);
    })

    .catch(error =>{
        console.log(error);
    });


/* 
En este ejemplo simulamos la respuesta de un servidor utilizando promesas.
Por otra parte mostramos el comportamiento de los estados de las promesas.

Para ver la resolución (resolve) debemos modificar el valor de la condición a 32 ya que (x = 10) --> 10 = (10 * 3 + 2) = 32
De lo contrario la promesa estará en estado de rechazo (reject)

Con then() retornamos el caso de éxito (resolve)
Con catch() retornamos el error o rechazo (reject)
*/

