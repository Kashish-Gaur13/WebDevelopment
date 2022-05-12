let text=document.querySelector('.text');

document.getElementById("btn").addEventListener("click",function(event){
    let str=document.querySelector('#textArea').value;
    if(solve(str))
    {
        text.innerText="True";
    }
    else
    {
        
        text.innerText="False";
    }
    event.preventDefault();
});

function solve(str)
{
    if (typeof str !== 'string')
    {
        return false;
    }

    let num=Number(str);

    if (Number.isInteger(num) && num > 0) 
    {
        return true;
    }

  return false;
}
