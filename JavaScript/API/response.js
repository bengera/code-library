//1. SPACE-TOURISM PROJECT
//2. Fetch response for space website api
fetch("https://bengera.github.io/space-tourism/data.json")

    .then((res) => res.json())
    .then((data) => {
        for (let i = 0; i < data.crew.length; i++) {
            elements.push(data.crew[i]);
        }
    }).catch(function (error) {
        console.log('Something went wrong');
        console.error(error);
    });