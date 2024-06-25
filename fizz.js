function fizzbizz(n)
{
    for(let i=1;i<=n;i++)
        {
            if(i%15==0)
                {
                    console.log("fizzbizz"); 
                }
            else if(i%3==0)
                {
                    console.log("fizz");
                }
            else if(i%5==0)
                {
                    console.log("bizz");
                }
            else{
                console.log(i);
            }
        }
}
fizzbizz(15);