

function fetchUserData() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            renderFetchedData(data.results[0]);
        })
}

function renderFetchedData(data) {
    document.querySelector('#name').lastChild.textContent = data.name.first + ' ' + data.name.last;
    document.querySelector('#email').lastChild.textContent = data.email;
    document.querySelector('#phone').lastChild.textContent = data.phone;
    document.querySelector('#location').lastChild.textContent = data.location.city + ', ' + data.location.state;
    document.querySelector('#age').lastChild.textContent = data.dob.age;
    document.querySelector('img').src = data.picture.large;
    // check if gender is male or female
    if (data.gender === 'male') {
        document.querySelector('img').style.border = '10px solid blue';
    } else {
        document.querySelector('img').style.border = '10px solid red';
    }
    hideSpinner();
}

function showSpinner() {
    document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none';
}

document.querySelector('#generate').addEventListener('click',()=>{
    showSpinner();
    fetchUserData();
})