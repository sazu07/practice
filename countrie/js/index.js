const loadCountrie=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}


loadCountrie();

const displayCountry=countries=>{

    countries.forEach(country=>{
        // console.log(country);
        const countryContainer=document.getElementById('country-list');
        const div=document.createElement('div');
        div.classList.add('demo')
        div.innerHTML=`<h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="countryByName('banglades')">Details</button>
        `
        countryContainer.appendChild(div);

         
    })

}

const countryByName=(name)=>{
    console.log(name)
}