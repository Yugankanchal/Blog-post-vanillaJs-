import { data } from './api.js'
const postList = document.querySelectorAll('ul')[0];

export function displayPost() {
    data.forEach(post => {
        const listElement = document.createElement('li');
        listElement.innerHTML = `<div>
                    <img src="https://th.bing.com/th/id/OIP.dT_Or5IBgFvSV7yXKotwgwHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7"
                        alt="" width="100px" class="rounded-[50%]">

                </div>
                <h2 class="text-[1.4rem] p-2 text-zinc-400">${post.title}</h2>
                <p class="p-2">
                    ${post.body.substr(0, 100)}
                </p>
                <button class="text-xl p-[10px] border-2 border-black rounded-md mt-[10px] details" data-id=${post.id} data-body=${post.body} data-title=${post.title} data-userid=${post.userId} type="submit">View
                    Details</button>`
        listElement.classList.add('listComponents')
        postList.append(listElement);
    });
}

