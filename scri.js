var imgdata =''
function encodeImage(image){
    var img = image.files[0]
    var file= new FileReader()
    file.onloadend = function(){
        imgdata = file.result
        console.log(file.result)
    
    }
    file.readAsDataURL(img)
}


//para generar el pdf

function pdfexport(){
    
    //Estos campos como tlt,lbname corresponden a los id de html es decir label
    //Mientras que lname son variables para guardarlas
    var ltitle = document.getElementById('tlt').innerText,
    nombrev = document.getElementById('nombre').innerText,
    edadv = document.getElementById('edad').innerText,
    fechav = document.getElementById('fecha').innerText,
    desv = document.getElementById('des').innerText,
    fallav=document.getElementById('falla').innerText;
   

    
// aqui  son lo que guardamos en la entrada de datos 

    var inom = document.getElementById('nom').value,
    ieda = document.getElementById('eda').value,
    ifech = document.getElementById('fech').value,
    ides = document.getElementById('desc').value;
    iopc = document.getElementById('opc').value;
    String: fav ="Falla";
    
  

window.jsPDF = window.jspdf.jsPDF;
 
// var doc = new jsPDF();
 
 var doc = new jsPDF();





 
 doc.setFontSize(18);
 doc.text(ltitle,60, 10);
 
 doc.setFontSize(16);
 doc.setFont('Montserrat');
 doc.text(80,20,"ISP SOFT-MEX SA de CV.");


var columns = ["DATOS DEL REPORTE"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+"\t"+fechav.toUpperCase()+ifech];
var data = [
[fav + '' + iopc],
[nombrev + ''  + inom],
[edadv + ''   + ieda],
[desv  + '' + "\n" + "\n"   + ides] ];

//var columns = ["Nombre", "Edad", "Falla"];
doc.autoTable(columns,data,{
theme:'grid',   
margin:{ top: 25 }}
);




doc.addImage(imgdata, 80, 90, 50, 70);

doc.save('1.pdf');
alert("Reporte enviado exitosamente.")

 //doc.setFontSize(18);

 //doc.text(ltitle,60, 10);
 //doc.setFontSize(14);
 
 //doc.text(fechav  + ''  + ifech, 110, 20);
 //doc.text(nombrev+ ''  + inom, 10,30);
 //doc.text(edadv + ''   + ieda, 10, 40);

 //doc.text(desv + ''    + ides, 10, 50);

 //pdf.save('1.pdf');
 

 }
 

