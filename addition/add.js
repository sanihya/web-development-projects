function abc()
{
    var a = document.getElementById("d1").value;
    var b = document.getElementById("d2").value;

    
    a = Number(a);
    b = Number(b);

    var c = a + b;       

    document.getElementById("d3").value = c;
    document.getElementById("op1").innerHTML = "Done! Result = " + c;
}
