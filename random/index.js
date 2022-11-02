const loadBuddy=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>getData(data))
}

loadBuddy();

const getData=data=>{
  const buddies=data.results;
  for (const buddy of buddies) {
    console.log(buddy);
    const buddyContainer=document.getElementById('buddies');
    const p=document.createElement('p');
    p.innerText=`phone:${buddy.phone}
    Email:${buddy.mail}
    name:${buddy.name.title} ${buddy.name.first} ${buddy.name.second}
    `
    buddyContainer.appendChild(p);
  }
  
}

