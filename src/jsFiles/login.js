export const form = document.getElementById('LoginForm');
export const submit = document.getElementById('submitButton');
const password = "ABC123@";
const username = "YugankAnchal";
const shimmerBox = document.getElementsByClassName('main-box')[0]
function handleLogin(main) {
    const inputFields = document.querySelectorAll('input');
    const inputUsername = inputFields[0].value;
    const inputPassword = inputFields[1].value;
    if (inputUsername === username && inputPassword === password) {
        shimmerBox.style.postion = 'relative';
        shimmerBox.style.zIndex = -1;
        form.style.display = "none";
        main.style.display = "block";
        showTost(successMsg);
        setTimeout(() => {
            shimmerBox.style.display = 'none';
        }, 2000)

    } else {
        showTost(errorMsg)
        console.log('Incorrect username or password');
    }
}
let toastBox = document.getElementById('toastbox')
let successMsg = '<i class="fa-solid fa-circle-check"></i> SuccessFully Loged IN'
let errorMsg = '<i class="fa-solid fa-circle-exclamation"></i> Incorrect Username or Password'
export function showTost(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }
    setTimeout(() => {
        toast.remove();
    }, 2000);


}

export { handleLogin };