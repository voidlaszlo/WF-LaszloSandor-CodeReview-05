let data = [
    {
        "id" : "1",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "2",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "3",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "4",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "5",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "6",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "7",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "8",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "9",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "10",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "11",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "12",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "13",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "14",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "15",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "16",
        "name" : "Jenny",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/test.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
]

let containerPeople = document.getElementById('container-people')
let containerFav = document.getElementById('container-favorites')

init()

function init() {
    displayPeople()
    displayFav()
    favToggle()
}

function displayPeople() {
    containerPeople.innerHTML = ""
    for(let person of data) {
        containerPeople.innerHTML +=
        `
        <div class="col-lg-3 col-md-6 mb-3">
            <div class="card" style="width: 100%;" id="${person.id}">
                <img src="${person.imgurl}" class="card-img-top" alt="pic">
                    <div class="card-body">
                        <h5 class="card-title">${person.name}</h5>
                        <p class="card-text">${person.text}</p>
                        <button class="btn btn-primary">&hearts;</button>
                    </div>
            </div>
        </div>
        `
    }
}

function displayFav() {
    containerFav.innerHTML = ""
    for(let person of data) {
        if(person.isFav === "true") {
            containerFav.innerHTML +=
            `
            <div class="col-lg-6 col-md-6 mb-4">
                <div class="card" style="width: 100%;" id="${person.id}">
                    <img src="${person.imgurl}" class="card-img-top" alt="pic">
                    <div class="card-body">
                        <h5 class="card-title mb-0">${person.name}, <small style="color:grey">${person.age}</small></h5>
                        <p class="card-text mt-0"><i class="fa fa-map-marker"></i> ${person.location}</p>
                        <p class="card-text">My hobbies are ${person.hobbies[0]}, ${person.hobbies[1]}, ${person.hobbies[2]}.</p>
                        <p class="card-text text-right mb-0 pb-0"><i class="fa fa-music"></i> ${person.favmusic}</p>
                        <a href="#" class="btn btn-primary">&cross;</a>
                    </div>
                </div>
            </div>
            `
        } else {

        }
    }
}

function favToggle() {
    containerPeople.addEventListener('click', e => {
        if(e.target.innerText === "♥") {
            console.log(e.target.parentNode.parentNode.id)
            e.target.classList.toggle("active")
            data[parseInt(e.target.parentNode.parentNode.id) - 1].isFav === "false" ? data[parseInt(e.target.parentNode.parentNode.id) - 1].isFav = "true" : data[parseInt(e.target.parentNode.parentNode.id) - 1].isFav = "false"
        }
        displayFav()
    })

    containerFav.addEventListener('click', e => {
        if(e.target.innerText === "✗") {
            data[parseInt(e.target.parentNode.parentNode.id) - 1].isFav = "false"
            let current = document.getElementById(e.target.parentNode.parentNode.id)
            current.lastElementChild.lastElementChild.classList.remove("active")
        }
        displayFav()
    })
}

