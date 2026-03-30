var k=1;
function abc()
{
    k=k+1;
    if (k>10)
    {
        k=1;
    }
    document.getElementById("q1").innerHTML=k;
}
function xyz()
{
    k=k-1;
    if (k<1)
    {
        k=10;

    }
    document.getElementById("q1").innerHTML=k;
}