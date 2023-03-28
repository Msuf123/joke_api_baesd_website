let js_response=async ()=>{
    try{
        await fetch('https://official-joke-api.appspot.com/random_joke')
       .then((response)=>{
        if(response.ok){
        console.log(response.status)
        console.log(response.ok)
        return response.json()}
        throw   new Error('Something went wrong');
    })  .then((json)=>{
            console.log(json.setup)
            console.log(json.punchline)
            span_one.innerHTML="It goes like .."
            span_one.style.fontSize="1.4em";
            span_one.style.fontFamily="Outfit', sans-serif;"
            span_three.style.fontSize="1.2em";
            span_two.style.display="block";
            span_two.innerHTML=json.setup;
            span_three.innerHTML=json.punchline;
        
       }
    
    )
   }
   catch(error){
    console.log("error occured "+error)
    span_one.innerHTML="Sorry!.."
    span_one.style.fontSize="2em";
    span_one.style.fontFamily="font-family: 'Kalam', cursive;"
    span_three.innerHTML="Network error please try again";
    span_two.style.display="none";
    span_three.style.fontSize="3em";
   }
 
}


let span_two=document.getElementById('span-two');
let span_three=document.getElementById('span-three');
let button=document.getElementById("button");
let span_one=document.getElementById('span-one');
button.addEventListener('click',js_response);



