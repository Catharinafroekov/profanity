const curseWords = [  {    bad: "var",    good: "const",  },  
    {    bad: "float",    good: "grid",  },  
    {    bad: "marquee",    good: "just don't",  },];

let theSentenceHasBeenTreated = false;
let theText = document.querySelector("p").textContent;
document.querySelector("button").addEventListener("click", replaceBadWords);

function replaceBadWords(){
if(theSentenceHasBeenTreated === false){
curseWords.forEach((curseWord) =>{
    theText = theText.replaceAll(curseWord.bad, curseWord.good);
});
console.log("theText", theText);
document.querySelector("p").textContent = theText;
theSentenceHasBeenTreated = true
}else{

    document.querySelector("dialog").showModal();
}
}

/* function isItSafe(){
return false;
} */