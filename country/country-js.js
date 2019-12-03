var s;

function load()
{
    var option= `<option value="choose country"><a>Choose the country</a></option>`; 
    var x=new XMLHttpRequest();
    x.open("GET","https://restcountries.eu/rest/v2/all",true);
x.onreadystatechange=function()
{
    if(x.readyState==4)
    {
      console.log("server response genereated") ;
    }
  
    
}
x.send();
x.onload=function()
{
    var country=JSON.parse(x.responseText);
    
    for(k in country)
    {
        option +=`<option value="${country[k].name}"><a>${country[k].name}       ,       ${country[k].alpha2Code}</a></option>`; 
          
    }
    document.getElementById("change").innerHTML=option;       
       
}
}

function load2()
{
    s=document.getElementById("change").value;
    console.log(s);   
    $(document).ready(function(){
        $("#search").val(s);
      });
    myfun4(s);

}






function myfun4(s)
{



    $(document).ready(function(){
        $("#info-container").fadeOut(50);;
                   
          });


    var container=document.getElementById("info-container");
    
   
var input=document.getElementById("search").value;
titleCase(input);
var u;
function titleCase(input) {
    var splitStr = input.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    u= splitStr.join(' '); 
 }
 
 


var x=new XMLHttpRequest();

x.open("GET","https://restcountries.eu/rest/v2/all",true);
x.onreadystatechange=function()
{
    if(x.readyState==4)
    {
      console.log("server response genereated") ;
    }
  
    
}
x.send();
x.onload=function()
{
    var data=JSON.parse(x.responseText);
        
        
        myfun3(data);
        
       
}

function myfun3(data)
{
    for(k in data)
{
  

    if(data[k].name==u || data[k].name==s)
    {
        console.log(s);
        $(document).ready(function(){
           
            $("#info-container").fadeIn("800");           
           $("#info-container").css("display","block");
           

          });

          var countryData =data[k];
      
        document.querySelector("#flag-container img").src = countryData.flag;
        document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;  
        document.getElementById("capital").innerHTML = countryData.capital;
        document.getElementById("dialing-code").innerHTML = `+${countryData.callingCodes[0]}`;
        document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
        document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
        document.getElementById("region").innerHTML = countryData.region;
        document.getElementById("subregion").innerHTML = countryData.subregion;
   
        document.getElementById("language").innerHTML=countryData.languages.filter(c => c.name).map(c => `${c.name} (${c.nativeName})`).join(", ");
       
        document.getElementById("Acronym").innerHTML=countryData.regionalBlocs.filter(c => c.name).map(c => `${c.name}`).join(" ");
        document.getElementById("Area").innerHTML = countryData.area;  
    
    }
   
   
}

}

}

     

    

