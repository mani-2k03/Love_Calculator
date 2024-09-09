function calculateLove(){
    const name1 =document.getElementById("name1").value.trim();  //remove whitespaces in name1
    const name2 =document.getElementById("name2").value.trim();  //remove whitespaces in name2
    //console.log(name1);

    if(name1=="" || name2==""){
        alert("Please Enter Both Names");
    }

    else{
        const lovepercentage=Math.floor(Math.random()*100);
        // console.log(lovepercentage);
        const result = document.getElementById("result");
        result.innerHTML=`<h2> ${name1} and ${name2} 's Love Percentage : ${lovepercentage}% </h2>`;

        if(lovepercentage<30){
            result.innerHTML += "<br> Not a Great Match. Keep Looking!";
        }
        else if(lovepercentage>=30 && lovepercentage<70){
            result.innerHTML += "<br> There is potential. Give it a try!";
        }
        else{
            result.innerHTML += "<br> Great Match! Love is in the Air!";
        }
    }
}