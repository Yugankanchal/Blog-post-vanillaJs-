import { showComments } from "./showComments.js";
export const getDetails = async (postId) => {
    const mainContent = document.getElementsByTagName('main')[0];

    mainContent.style.display = 'none';
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).
        then(response => response.json())
    const postDetailsSection = document.getElementsByClassName('PostDetails')[0];
    const comments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).
        then((response) => response.json());
    // i'm having array of comments now i have to display all the elements of section and display none for main
    const Author = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`).
        then(response => response.json());

    postDetailsSection.style.display = 'block'
    const PostDetails = document.createElement('div');
    PostDetails.innerHTML = `
        <img src="https://th.bing.com/th/id/OIP.dT_Or5IBgFvSV7yXKotwgwHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7"
            alt="" class="rounded-[50%]">
        <div>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <p class="authorName">Posted By:${Author.name}</p>
            <button class=" Comments" id="comments">Show Comments</button>
        </div>
        `
    PostDetails.classList.add('PostDetailsDiv')
    postDetailsSection.append(PostDetails);
    // handle show Comments
    const commentButton = document.getElementById('comments');
    commentButton.addEventListener('click', () => {
        commentButton.style.display = 'none';
        showComments(comments, PostDetails, commentButton);
    })



}