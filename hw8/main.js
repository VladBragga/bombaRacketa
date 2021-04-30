function loadDoc() {
    const ajax = new XMLHttpRequest();

    ajax.addEventListener('load', () => {
        renderUser(JSON.parse(ajax.responseText).results[0]);
    });

    ajax.open("GET", "https://randomuser.me/api/", true);

    ajax.send();
}

function renderUser(user){
    console.log(user);
    const { 
        picture : { large }, 
        name : { title, first, last },
        dob : { age },
        location : { country, city }
        } = user;

    const userHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${ large }" class="card-img-top" alt="eliza">
    <div class="card-body">
        <h5 class="card-title">${ title } ${ first } ${ last }</h5>
        <p class="card-text">${ age }, ${ country } ${ city }</p>
    </div>
    </div>`;

    usersContainer.innerHTML += userHTML;
}

const usersContainer = document.querySelector('.users');  
document.querySelector('.btn-user-generate').addEventListener('click', loadDoc);