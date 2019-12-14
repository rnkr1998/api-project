
function myfun()
{
 var x=document.getElementById("name");
 var y=document.getElementById("password");
 var a = document.getElementById("mycheck");
 var b=document.getElementById("submit");
 var c=document.getElementById("p");
 var d=document.getElementById("p1");
 


  
     
  if(x.value=="naveenreddy551@gmail.com" && y.value=="naveen")
  {
   c.style.display="none"; 
     if(a.checked==true)
     {
      x.style.background="none";
      y.style.background="none";
      c.style.display="block";
      d.style.display="none";
          c.style.color="green";
      d.style.background="none";
      c.style.background="none";
            c.innerHTML="Login Successfull !";
    
            window.location.href="../home/home.html";
     }
     else
     {
      x.style.background="none";
       y.style.background="none";
           d.style.display="block";
           d.style.background="red";
           d.innerHTML="Please accept the Terms and conditions!";
      }


  }

   else if(x.value=="" && y.value=="")
  {
    c.style.display="block";
    d.style.display="none";
     x.style.background="orange";
     y.style.background="orange";
     c.style.color="white";
   c.style.background="red";
     c.innerHTML="Enter Your details First !";
      f1();
    
  }
  else if(x.value=="")
  {
    y.style.background="none";
    c.style.display="block";
    d.style.display="none";
    x.style.background="orange";
    c.style.color="white";
    c.style.background="red";
    c.innerHTML="Enter Username !";
    f1();
  }
  else if(y.value=="")
  {
    x.style.background="none";
    
    c.style.display="block";
    d.style.display="none";
    y.style.background="orange";
   
    c.style.color="white";
    c.style.background="red";
    c.innerHTML="Enter Password !";
    f1();
  }
  
     
  else 
  {
   if(a.checked==true)
     {
      x.style.background="none";
      y.style.background="none";
      c.style.display="block";
      d.style.display="none";
       c.style.background="red";
       c.style.color="white";
      c.innerHTML="Username or password is Incorrect!";
     }
    else
     {
      x.style.background="none";
      y.style.background="none";
          d.style.display="block";
          c.style.display="none";
           d.style.background="red";
      d.style.color="white";
           d.innerHTML="Please accept the Terms and conditions!";
      }
  }


 
}
  

 
  




