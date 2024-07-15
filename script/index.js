import { getData, data } from './api.js'
import { displayPost } from './postList.js'
import { getDetails } from './postDetails.js';
import { handleLogin, submit } from './login.js';

const submitButton = document.getElementById('submitButton');
const main = document.getElementsByTagName('main');
submit.addEventListener('click', (event) => {
    event.preventDefault()
    handleLogin(main[0]);
    setTimeout(() => {

        displayPost();
        const detailsbutton = document.getElementsByClassName('details');
        const buttons = Array.from(detailsbutton);
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const target = event.target;
                const postid = target.getAttribute('data-id');
                getDetails(postid);
            })
        });

    }, 2000)
}, { once: true })

