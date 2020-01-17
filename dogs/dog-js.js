function myfun4()
{
  var x=new XMLHttpRequest();
    my() 
function my()
{
  
  
   
  
    x.open("GET","https://dog.ceo/api/breeds/image/random",true);
     x.onreadystatechange=function(){

     }
   x.send();
x.onload=function()
{
    var data=JSON.parse(x.responseText);
         $(document).ready(function(){
       $("#img1").fadeOut(400);
     
    });
    
        
        $(document).ready(function(){

            $("#img1").attr("src",data.message);       
     $("#img1").fadeIn(1000);
   
   
          });       

          my1();
}

}
  



function my1()
{
  
    $(document).ready(function(){
        $("#img2").fadeOut(800);
        $("#img2").fadeIn(1000);
    
     });
 x.open("GET","https://dog.ceo/api/breeds/image/random",true);
  x.onreadystatechange=function()
{
 
}
x.send();
x.onload=function()
{
 var data=JSON.parse(x.responseText);
     
 
   
     $(document).ready(function(){

         $("#img2").attr("src",data.message);       
            });       
            my2();   
}

}





function my2()
{
  
    $(document).ready(function(){
        $("#img3").fadeOut(800);
        $("#img3").fadeIn(1000);
      });
 
 x.open("GET","https://dog.ceo/api/breeds/image/random",true);
  x.onreadystatechange=function()
{
 
 
}
x.send();
x.onload=function()
{
 var data=JSON.parse(x.responseText);
     
     $(document).ready(function(){

   
      $("#img3").attr("src",data.message);  

   });
   
   my3();            
}

}



function my3()
{
   
$(document).ready(function(){
    $("#img4").fadeOut(800);
    $("#img4").fadeIn(1000);
   });
 x.open("GET","https://dog.ceo/api/breeds/image/random",true);
  x.onreadystatechange=function()
{
 

}
x.send();
x.onload=function()
{
 var data=JSON.parse(x.responseText);
     
 
  
     $(document).ready(function(){

         $("#img4").attr("src",data.message);       
       });       
}
}





}
