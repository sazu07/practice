const loadCountrie=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}


loadCountrie();

const displayCountry=countries=>{

    countries.forEach(country=>{
        console.log(country);
        const countryContainer=document.getElementById('country-list');
        const div=document.createElement('div');
        countryContainer.appendChild(div);
        const h3=document.createElement('h3');
         h3.innerText=country.name;
         div.appendChild(h3);
         const p =document.createElement('p');
         p.innerText=country.capital;
         div.appendChild(p);
         
    })

}