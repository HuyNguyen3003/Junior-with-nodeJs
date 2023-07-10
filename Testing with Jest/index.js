const sum = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};


// async
const axios = require('axios')

const fetchData = async (Id) => {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${Id}`);
    return (response.data);

}



module.exports = {
    sum,
    subtract,
    multiply,
    fetchData
};