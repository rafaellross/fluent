
export const getAll = (resource) =>
fetch(`https://jsonplaceholder.typicode.com/${resource}`)
.then(response => response.json())
