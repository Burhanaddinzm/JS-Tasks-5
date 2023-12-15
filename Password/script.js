const passInput = document.getElementById('input');
const eyeIcon = document.querySelector("#btn img");
const eyeBtn = document.getElementById('btn');

eyeBtn.addEventListener('click', () => {
    if (passInput.type === 'password') {
        eyeBtn.innerHTML = `<img src="./assets/icons/closeEye.svg" alt="" />`
        passInput.type = 'text';
    } else {
        eyeBtn.innerHTML = `<img src="./assets/icons/openEye.svg" alt="" />`
        passInput.type = 'password';
    }
});
