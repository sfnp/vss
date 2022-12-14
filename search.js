

let grid = document.querySelector(".to-be-seen");
let filterInput = document.getElementById("filterInput");
let to_be_hidden = document.querySelector('.to-be-hidden');
let to_be_seen = document.querySelector('.to-be-seen');
let more_btn = document.querySelector('.more')
let search = document.querySelector('.search')
let magrin = document.getElementById('boyd')

function changeText() {
    let more_btn = document.querySelector('.more');
    if (more_btn.value === "view_more") {
    more_btn.textContent = "View Less";
    more_btn.value = "view_less";
    }
    else {
    more_btn.textContent = "View More";
    more_btn.value = "view_more";
    
}
}

function close_and_open() {
    to_be_seen.classList.toggle('hidden');
    to_be_hidden.classList.toggle('hidden');
    search.classList.toggle('hidden')
}

more_btn.addEventListener('click', () => {
    close_and_open()
    changeText()
})

// function openTeachers() {
fetch('./database/teachers.json')
    .then(res => res.json())
    .then(json =>{

        // iterating products
        for (let value of json){
            addElement(grid, value)
        }
        
    });

filterInput.addEventListener('keyup', filterProducts);

// callback function 
function filterProducts(valueOfImage){



    let filterValue = filterInput.value.toUpperCase();
    let item = grid.querySelectorAll('.item')
    // console.log(filterValue);

    for (var i = 0; i < item.length; i++){
        let span = item[i].querySelector('.title');

        if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            item[i].style.display = "block";
            
        }else{
            item[i].style.display = "none";
        }

    }



}


function addElement(appendIn, value){
    let div = document.createElement('div');
    div.className = "item teacher flex flex-col";
    
    let { image, name, subject } = value;

    
    div.innerHTML = `
    <img src="image.jpg" height="200px" width="200px" class="place-self-center self-center" style="margin-left: 30px;" alt="connot access the image due to the suspension of the official website of the school.">
    <div class="">
    <h1 class="text-lg title">${name}</h1>
    <span class="">Subject: ${subject}</span>
</div>
    `;
    appendIn.appendChild(div);
    
}
