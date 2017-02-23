var arr=[ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
 { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
 { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
 { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
 { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];





var s ="";
var r=document.getElementById("t1");

for (var key in arr) {
    s += "<div><ul><li>Nombre:" + arr[key].nombre + "</li>"
       + "<br>" + "<li>"+ "Apellido:" +  arr[key].apellido + "</li>"+
         "<br> <li> Rol:" +  arr[key].rol + "</li>" +
        " <br> <li> cumpleanios: " + arr[key].cumpleanios + "</li> </ul> </div>" ;
        s += "<br />";
    }

  r.innerHTML=s;
