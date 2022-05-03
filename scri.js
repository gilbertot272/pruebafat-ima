//function to export pdf DOC
function pdfexport(){
    alert("Reporte enviado exitosamente.")
    //Estos campos como tlt,lbname corresponden a los id de html es decir label
    //Mientras que lname son variables para guardarlas
    var ltitle = document.getElementById('tlt').innerText,
    nombrev = document.getElementById('nombre').innerText,
    edadv = document.getElementById('edad').innerText,
    fechav = document.getElementById('fecha').innerText,
    desv = document.getElementById('des').innerText;
    
// aqui  son lo que guardamos en la entrada de datos 
    var inom = document.getElementById('nom').value,
    ieda = document.getElementById('eda').value,
    ifech = document.getElementById('fech').value,
    ides = document.getElementById('desc').value;


window.jsPDF = window.jspdf.jsPDF;
 //var doc = new jsPDF();
 var doc = new jsPDF();
 doc.setFontSize(18);
 doc.text(ltitle,60, 10);
 doc.setFontSize(16);
 doc.text(nombrev+ ''  + inom, 10,20);
 doc.text(edadv + ''   + ieda, 10, 30);
 doc.text(fechav + ''  + ifech, 10, 40);
 doc.text(desv + ''    + ides, 10, 50);

 doc.save('1.pdf');
 //doc.output('dataurlnewwindow',{A1: ltitle.value});

 }