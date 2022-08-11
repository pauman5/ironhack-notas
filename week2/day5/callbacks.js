// Vamos ha hacer la mimimca que estaremos pidiendo la info a una base de datos, que contineen so "posts".

const posts = [
    { title: "Articulo 1", body: "I love the Wu Tang Clan"},
    { title: "Articulo 2", body: "I love to play guitar"}
];

// Usar Callbacks para llamar a esta variable que hace la mimica

const getPosts = (() => {
    setTimeout(() => {
        let outPut = "";
        posts.forEach((post, index) => {
            outPut += `
            <ul>
            <li>${post.title}</li>
            <li>${post.body}</li>
            <li>${index}</li>
            </ul>
            `
        });
        document.body.innerHTML = outPut;
    }, 1000)
})

Usar Callback para crear un articulo

const createPost = ((post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
})

createPost(
    {
        title: "Articulo 3", 
        body:"Even though i like surfing, i suck at it"
    }, 
    getPosts
);



const createPost = ((postsArray, callback) => {
    setTimeout(() => {
        postsArray.forEach((post, index) => {
           posts.push(post[index])
        });
        callback();
    }, 2000);
})


// newPosts= [
//     {
//         title: "Articulo 3", 
//         body:"Los mejores restaurantes de Barcelona"
//     },
//     {
//         title: "Articulo 4", 
//         body:"Vacaciones desde un Bootcamp"
//     },
//     {
//         title: "Articulo 5", 
//         body:"Estudiar para competir la ola de calor"
//     }
// ]

// createPost( newPosts, getPosts);