const posts = [
    { title: "Articulo 1", body: "I love the Wu Tang Clan"},
    { title: "Articulo 2", body: "I love to play guitar"}
];

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
    }, 1000);
});

const createPost = ((post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            post.push(post);

            //Mimica de error
            const error = false;

            if (!error) {
                resolve();
            } else  {
                reject("Oh uh there is a error with the call");
            }
        }, 2000);
    });
});

// createPost({
//     title: "Articulo 3", 
//     body:"Even though i like surfing, i suck at it",
// })
// .then(getPosts)
// .catch((nuestroError) => {
//     console.log(nuestroError);
// });

// Usando el metodo relacionado al metodo Promise que se llama .PromiseAll

const diego = Promise.resolve("Wu Tang Clan");
const anyGivenNumber = 10; 

const goodbye = new Promise((resolve,reject) => {
    setTimeout(resolve, 3000, "Se marcho..");
});

Promise.all([diego, anyGivenNumber, goodbye]).then((niIdea) => {
    console.log(niIdea)
})