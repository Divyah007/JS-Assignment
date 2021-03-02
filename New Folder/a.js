

 

function ui()
{
    x=document.getElementById("jo");
    // x.type="text";
    if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    

}





function l()

{





    io=document.getElementById("jo");
    ao=document.getElementById("na");

    if(io.value!=""&& ao.value!="")
    {

      location.href = "a.html";
    // h=document.getElementById("na");
    // an=h.value;
    //  cd=new Date();
    // // ct=cd.toLacaleTimeString();
    // document.write("Welcome "+an+" you logged in at "+cd);
    }

    else{
        location.reload();
    }
}


function yu()
{
  location.href = "b.html";
}