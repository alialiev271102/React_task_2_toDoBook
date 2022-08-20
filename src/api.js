import axios from "axios";

export const getAllBooks = async () => {
    const response = await axios(`${process.env['REACT_APP_API_SERVER']}/books`)
    return response.data;
}

export const createBook = async ({...book}) => {
    await axios.post(`${process.env['REACT_APP_API_SERVER']}/books`,book)
        .then(res => {
            console.log(res.data);
        });
}

export const updateBook = async (book, id) => {
    await axios.put(`${process.env['REACT_APP_API_SERVER']}/books/${id}`, book)
        .then(res => {
            console.log(res.data);
        })
}

export const removeBook = async (id) => {
    await axios.delete(`${process.env['REACT_APP_API_SERVER']}/books/${id}`)
        .then(res => {
            console.log(res.data);
        });
}