function digiclk()
{
    var date=new Date();
    // console.log(date)
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    // var ml=date.getMilliseconds();
    var dt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();
    var am_pm="AM"
    if(hh>=12){
        am_pm="PM";
        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    if(mo==0)
    {
        mo="Jan";
    }
    else if(mo==1)
    {
        mo="Feb";
    }
    else if(mo==2)
    {
         mo="Mar";
    }
    else if(mo==3)
    {
        mo="Apl";
    }
    else if(mo==4)
    {
         mo="May";
    }
    else if(mo==5)
    {
        mo="Jun";
    }
    else if(mo==6)
    {
        mo="Jul";
    }
    else if(mo==7)
    {
        mo="Aug";
    }
    else if(mo==8)
    {
        mo="Sep";
    }
    else if(mo==9)
    {
        mo="Oct";
    }
    else if(mo==10)
    {
        mo="Nov";
    }
    else if(m0==11)
    {
        mo="Dec";
    }
    switch(day)
    {
        case 0:day="sunday"
        document.body.style.backgroundImage="url()"
        break;

        case 1:day="monday"
        document.body.style.backgroundImage="url()"
        break;

        case 2:day="tuesday"
        document.body.style.backgroundImage="url()"
        break;

        case 3:day="wednesday"
        document.body.style.backgroundImage="url()"
        break;

        case 4:day="thursday"
        document.body.style.backgroundImage="url()"
        break;

        case 5:day="friday"
        document.body.style.backgroundImage="url()"
        break;

        case 6:day="saturday"
        document.body.style.backgroundImage="url()"
        break;
     }

     
     document.getElementById("Date").innerHTML=`${dt}/${mo}/${yy}`;
     document.getElementById("Time").innerHTML=`${hh}/${mm}/${am_pm}`;
     document.getElementById("Day").innerHTML=day;
     document.getElementById("Sec").innerHTML=ss;
     setTimeout(digiclk,1000);
}
digiclk()