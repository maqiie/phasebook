function getData(){
    fetch("http://localhost:3000/messages")
    .then(response=> response.json())
    .then(jsonData=>displayData(jsonData))
    
}
function displayData(data){
    console.log(getData);
    for (item of data){
        const card =document.createElement("div")
        card.className="card"
        const cardDetails=`
        <img src="${item.image}" alt="student image">
        <p>${item.message}"</p>
        <h4>${item.name}"</h4>
        `
        card.innerHTML=cardDetails
        const conatiner=document.getElementById("data_container")
        conatiner.appendChild(card)
   }
}
getData()

function seachName(){
     const form= document.getElementById("searchForm")
     const input= document.getElementById("name").value


     form.addEventListener("submit",(e)=>{
        e.preventDefault()

        fetch(`http://localhost:3000/messages?name=${input}`)
     })
    }