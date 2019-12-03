var x= new XMLHttpRequest();
var merge="";
var ref;
var c;
var kd;
var conn='<h3 style="margin-top:18px">CURRENT MATCHES</h3>';
var con='<h3>LIVE SCORES:</h3>';
var contain="";
var api="rGY6BB1sgfXf1R16xXuwfn4ET872";
//var api="PMPpcLDrZ2ZbXZG616W2QA2C2ml2";
//B5JF45hexjMpeTgkGfch6f9gvNP2
//bIkmr0aZZdWKedoOMFXTlipk0pu1
// rGY6BB1sgfXf1R16xXuwfn4ET872


function fun(ref)
{
 
 
  x.open("GET","https://cricapi.com/api/cricketScore?unique_id="+ref+"&apikey="+api,true);
  x.onreadystatechange = function()
  {
         
         
             
            if(this.readyState==4)
            {
          
          
                   
            }
            
}
x.send();
x.onload=function()
{
  var sata=JSON.parse(x.responseText);


  if(sata.matchStarted==true)
  {
    if(sata.score!=undefined)
    {
    document.getElementsByClassName("col-md-4 sidenavv")[0].innerHTML =con +"<h6 id='headingg'>"+sata.score+"</h6><hr>"
    }
    else
    {
      document.getElementsByClassName("col-md-4 sidenavv")[0].innerHTML =con +"<h6 id='headingg'>Score unavailable</h6><hr>"
    }
  }
  else{
    document.getElementsByClassName("col-md-4 sidenavv")[0].innerHTML =con +"<h6 id='jumper'>Match is not yet started.....,<hr>"+sata["team-1"]+" vs "+sata["team-2"]+kd+"<h6><hr>";
  }
  
  static(ref);
  



  function static(ref)
{
  x.open("GET","https://cricapi.com/api/fantasySummary/?unique_id="+ref+"&apikey="+api,true);
  x.onreadystatechange = function()
  {
         
         
             
            if(this.readyState==4)
            {
          
          
                  
            }
            
}
x.send();
x.onload=function()
{
  var bata=JSON.parse(x.responseText);

  var sa=bata.data;
  var man=sa["man-of-the-match"];
 var manu=man.name;
 
if(sa.matchStarted==true)
{
  
  if(sa.toss_winner_team!=null)
  {
    contain=`<h6 class="player"> TOSS WINNER : <span style="color:yellow">${sa.toss_winner_team}</span></h6><hr>`
  }

  if(manu!=null)
  {
 contain +=`<h6 class="player">MAN OF THE MATCH: <span style="color:yellow">${manu}</span></h6><hr>` 
  }
  
  if(sa.winner_team!=null)
  {
contain +=`<h6 class="player"> WINNER-TEAM: <span style="color:yellow">${sa.winner_team}</span></h6><hr>`;
  }

  document.getElementsByClassName("col-md-4 sidenavv")[0].innerHTML +=contain;
         }
           }
           
         
}  

}
}








function myfun()
 {

                    
                      
                      x.open("GET","https://cricapi.com/api/matches/?apikey="+api,true);
        
                    
                      x.onreadystatechange = function()
                      {
                             
                             
                                 
                                if(this.readyState==4)
                                {
                              
                              
                                      
                                }
                                
                             
              
                      };
                      x.send();
                      x.onload=function()
                      {
                        var data=JSON.parse(x.responseText);
                        var m=data.matches;
                        
                        for(k in m)
                        {
                        
                       c=m[k];
                      
                       if(c.matchStarted==true)
                       {
                         kd=new Date(c.date);
                        merge += `<div class="unique" value=" ${c.unique_id}"  onclick="fun(${c.unique_id})"><a class="match-link" style="color: orange ;cursor:pointer">${c["team-1"]}       vs      ${c["team-2"]}  
                        <br></a><span id="date">Date: ${kd},<br>  Match has started  </span>
                       <div class="score" ></div></div><hr>`;
                       
                       }
                       else{
                        merge += `<div class="unique" value=" ${c.unique_id}"  onclick="fun(${c.unique_id})"><a class="match-link" style="color: orange ;cursor:pointer">${c["team-1"]}       vs      ${c["team-2"]}  
                        <br></a><span id="mate";>Date: ${kd},    <br>        Match has not started</span>
                       <div class="score" ></div></div><hr>`;
                       }
                       
                        document.getElementsByClassName("col-md-8")[0].innerHTML=conn+merge;
                       for(i=0;i<c.length;i++)
                       {
                          document.getElementsByClassName("match-link")[i].addEventListener("click", fun(c.unique_id));
                        
                        
                       }
                        }
                      
                     
                        
                        
                       
                      }
                       
 }


                  
                  
                
                                             
                              
                                
                                                       
                            
                           
                            
                           
 
