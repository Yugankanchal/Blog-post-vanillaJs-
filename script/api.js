const url = 'https://jsonplaceholder.typicode.com/posts'
export let data
export const getData = async () => {
    data = await fetch(url).then((response) => response.json());
}

getData();


