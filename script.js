let url = 'https://randomuser.me/api';
let user;
let userContainer = document.querySelector('.userContainer')
let btn = document.querySelector('.btn')
let successContainer = document.querySelector('.successContainer')

let fetching = () => {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then((data) => {
            user = data.results[0];
            showUser(user);
        })
}



function showUser(obj){
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `
            <div class = 'user' >
                <img src="${obj['picture']['large']}" alt="user picture">
                <h2>${obj['name'] ['first']} ${obj['name']['last']} </h2>
                <p>${obj['location']['city']}</p>
                <p>${obj['location']['country']}</p>
                <p>${obj['location']['postcode']}</p>
            </div>`;
    userContainer.append(userDiv);
}

btn.addEventListener('click', () => {
    successContainer.innerHTML = `
        <div>
            <p>SUCCESS!</p>
        </div>
    `
    for (let i = 0; i < 5; i++){
        fetching();
    }
})
