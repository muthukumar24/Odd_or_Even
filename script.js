function checkFunction(){
  
    var a = Number(document.getElementById("input").value)

for (var i=0; i<=a; i++)
{
    if(i == 0)
    {
        document.write(i +" is Even");
        document.write("<br>")
    }
    else if(i % 2 == 0)
    {
        document.write(i +" is Even");
        document.write("<br>")
    }
    else
    {
        document.write(i +" is Odd");
        document.write("<br>")
    }
}
}
