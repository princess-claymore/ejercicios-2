var arr=[ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
 { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
 { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
 { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
 { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];

var spContainer = document.getElementById("t1");
arr.forEach(function(element,index){
	var CajIndiv= document.createElement("div");
	CajIndiv.classList.add("div-individual");
	for(var prop in element){
		var pContenedor= document.createElement("p");
		pContenedor.innerHTML = prop + ":" + element[prop];
		CajIndiv.appendChild(pContenedor);
	}
	spContainer.appendChild(CajIndiv)
})
