import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async() => {
    try {
        const todos = await axios.get(url);
        return todos;
    } catch (error) {
        console.error(error);
    }
};