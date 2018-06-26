// Recorrer un array de Objetos
const products = [
	{
		name: 'pijama',
		type: 'ropa'
	},
	{
		name: 'nevera',
		type: 'electrodoméstico'
	},
	{
		name: 'asus',
		type: 'computador'
	},
	{
		name: 'macbook',
		type: 'computador'
	},
	{
		name: 'smart-tv',
		type: 'electrodoméstico'
	},
	{
		name: 'toshiba',
		type: 'computador'
	}
]
 
const arrObj = (arr) => {//podria ser nada (arr) ,funcion flecha
	//declaracion de variable que contiene un arreglo vacio
	let computadores = [];
	//recorrer un arreglo de objeto
	
	for (let i = 0;i < products.length;++i) {
	//condicion
		if(products[i].type === 'computador'){
		// push introduce los productos que se filtran
		computadores.push(products[i]);
		console.log(computadores);
	//}	
		
	}
return computadores;
}
console.log(arrObj(products));// esta llamando la funcion y le estoy poniendo un parametro

}

// un grupo de amigos va a un evento,tienen que sentarse por orden de lista.
//Escribir una funcion  donde dado el nombre de la personas puedas indicar el asiento en el que le toca sentarse
//Nota: la numeracion de los asientos comienza en 1,si la persona no tiene asiento devuelve 0.

const getSeat = (name) => {
	const names = ['Rodrigo','Alexandra','Daniela','Sebastian','Eduardo','Camila']

	let tickets = names.indexOf(name);
	let result;
	if(tickets === undefined){
		result = 0;
	}else{
		result = tickets + 1
	}
	return result;
} 

console.log(getSeat('Juana'));
console.log(getSeat('Alexandra'));

// escribir una funcion que toma un array de matrices y devuelve un objeto con cada par de elementos,
// en el array como un par clave-valor

const arr = [['name', 'chica'],['age', 5],['color', 'white']];
 
function transformArrToObj(arr){
	let cat = {};
	for (let i = 0; i < arr.length; i++) {
		cat [arr[i][0]] = arr[i][1];
		//cat['name] = 'Chica
		
	}
return cat;
}

console.log(transformArrToObj(arr));

//function transformArrToObj(arr) {
//	let cat ={};
//	arr.forEach(element => {
//		cat[e[0]] = e[1]
//	});	
//return cat;
//}
//}
// Usar Reduce CON STRING
const phrase = ['h','e','l','l','o'].reduce((a,b)=>{
return a+b
})
console.log(phrase);
