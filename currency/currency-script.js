function convertCurrency()
{
  var option="";
  var x=new XMLHttpRequest();

  x.open("GET","https://openexchangerates.org/api/currencies.json",true);
x.onreadystatechange=function()
  {
    if(x.readyState==4)
      {
        console.log("response generated");

      }
   }
   x.send();
   x.onload=function()
    {
    var y=JSON.parse(x.responseText);
    for(k in y)
    {
         option +=`<option value="${k}"><a>${y[k]}       ,       ${k}</a></option>`;   
          
    }
    document.getElementsByClassName("mdb-select md-form")[0].innerHTML=option;
    document.getElementsByClassName("mdb-select md-form")[1].innerHTML=option;   
   load();
  }
}

function swap()
{
  var m = document.getElementById("from");
  var st = m.options[m.selectedIndex].innerHTML;

  var n = document.getElementById("to");
  var str = n.options[n.selectedIndex].innerHTML;

  m.options[m.selectedIndex].innerHTML=str;


  n.options[n.selectedIndex].innerHTML=st;
  
  load();
}








function load()
{


      var a=document.getElementById("fromAmount").value;
      var b=document.getElementById("from").value;
      var d=document.getElementById("to").value;
    
  
    var z=new XMLHttpRequest();
    var url="https://free.currencyconverterapi.com/api/v6/convert?q="+b+"_"+d+"&compact=ultra&apiKey=5172fe222bfa0492a683";
    z.open("GET",url,true);
   
    z.onreadystatechange=function()
    {
         if(z.readyState==4)
         {
            console.log("response generated");
         }
    }
    z.send();
    z.onload=function()
    {
       
        var res=JSON.parse(z.responseText);
     
        for(k in res)
        {
         
          var res2=res[k];
        
         
          $(document).ready(function(){
            $("#toAmount").val(res2*a);
            console.log(res[k]);
          });
          
        }
      
      }
}



