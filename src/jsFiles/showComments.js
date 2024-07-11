function showComments(commentsData, postDetails, commentButton) {
    const commentSection = document.createElement('ul');
    commentSection.setAttribute('type', 'circle')
    console.log(postDetails);
    commentsData.forEach(comment => {
        console.log(comment);
        const listElement = document.createElement('li');
        listElement.innerHTML = `
            <p class="w-[90%]">${comment.body}</p>
        `
        listElement.classList.add('bulletPoints')
        commentSection.append(listElement);
    });
    postDetails.append(commentSection);
    const hideButton = document.createElement('button');
    hideButton.classList.add('hideButton');
    hideButton.innerText = 'Hide Comments';
    postDetails.append(hideButton);
    hideButton.addEventListener('click', () => {
        commentSection.style.display = 'none';
        commentButton.style.display = 'block';
        hideButton.style.display = 'none';
    })

}

export { showComments }