  function loadQuote(){
    fetch('https://api.kanye.rest')
    .then(res=>res.json())
    .then(data=>DisplayQuotes(data))
  }


  const DisplayQuotes=quote=>{
   const blockquoteContainer =document.getElementById('display-quote');
   const p= document.createElement('p');
   p.innerText=quote.quote;
   blockquoteContainer.appendChild(p)
  }