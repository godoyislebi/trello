function anadirLista (){
	//Rescato los elementos de index
	var contenedorTodo = document.getElementById("contenedorTodo");
	var contenedorVacio = document.getElementById ("contenedorVacio");
	contenedorVacio.setAttribute("class", "celeste");

	//Añado textarea
	areaTexto = document.createElement("input");
	var contenedorLista = document.createElement("div");
	contenedorLista.setAttribute("class","listas");
	areaTexto.setAttribute("type","text");
	areaTexto.setAttribute("placeholder","Ingrese nombre de la lista");
	areaTexto.setAttribute("id","texto");
	areaTexto.setAttribute("class","text");
	areaTexto.value;
	areaTexto.value = "";
	contenedorLista.appendChild(areaTexto);


	//Añado el botón guardar
	var agregar = document.getElementById("contenedorTodo");
	var botonGuardar = document.createElement("input");
	botonGuardar.setAttribute("type","button");
	botonGuardar.setAttribute("value","guardar");
	botonGuardar.setAttribute("class","bguardar");
	contenedorTodo.appendChild(contenedorVacio);
	contenedorLista.appendChild(botonGuardar);
	contenedorVacio.appendChild(contenedorLista);



	botonGuardar.addEventListener("click", function (){
		var nuevaLista = document.getElementById ("texto").value;
		var elementoTexto = document.createElement("p");
		var contenedorMensaje = document.createTextNode(nuevaLista);
		elementoTexto.appendChild(contenedorMensaje);
		contenedorLista.appendChild(elementoTexto);

		var anadir =document.createTextNode("Añadir nueva tarjeta");
		var nodoA = document.createElement("a");
		nodoA.appendChild(anadir);
		nuevaLista.appendChild(nodoA);
	})


}
