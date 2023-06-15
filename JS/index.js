// Creating HTML elements using DOM

let root = document.createElement("div")
root.setAttribute("id", "root")
root.setAttribute("class","container-fluid")
document.body.appendChild(root)

let h1 = document.createElement("h1")
h1.setAttribute("id","h1")
h1.innerHTML = "Nobel Prizes"
root.appendChild(h1)

let table= document.createElement("table")
table.setAttribute("class", "table table-hover table-bordered")
root.append(table)

let th1 = document.createElement("th")
th1.innerHTML = "Award Year"
table.appendChild(th1)

let th2 = document.createElement("th")
th2.innerHTML = "Category"
table.appendChild(th2)
let th3 = document.createElement("th")
th3.innerHTML = "Date Awarded"
table.appendChild(th3)

let th4 = document.createElement("th")
th4.innerHTML = "Full Name"
table.appendChild(th4)

let th5 = document.createElement("th")
th5.innerHTML = "Known Name"
table.appendChild(th5)

let th6 = document.createElement("th")
th6.innerHTML = "Motivation"
table.appendChild(th6)



const url = "https://masterdataapi.nobelprize.org/2.1/nobelPrizes"

async function constructData(data) // To display all the fetched data in a table
{ 
    let tbody = document.createElement("tbody")
    table.appendChild(tbody)
    data.forEach(e => {
        let tr = document.createElement("tr")      
        tr.innerHTML = `<tr>
        <td>${e.awardYear}</td>
        <td>${e.categoryFullName.en}</td>
        <td>${e.dateAwarded}</td>
        <td>${e.laureates[0].fullName.en}</td>
        <td>${e.laureates[0].knownName.en}</td>
        <td>${capitalize(e.laureates[0].motivation.en)}</td>
    </tr>`
        tbody.appendChild(tr)
    });
    
}

async function getData() //fetch the data from API url
{
    try {
        let res = await fetch(url)
        let data = await res.json()
        console.log(data.nobelPrizes[0].laureates[0].fullName.en)
        constructData(data.nobelPrizes)
    } catch (error) // if the page failed, this would return the error message
    { 
        alert("Failed to load Page")
        console.log(error)
    }
    
}
getData();

function capitalize(str){
   return str.charAt(0).toUpperCase() + str.slice(1) // to capitalize first letter of motivation
}