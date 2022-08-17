import axios from "axios";

export const getAllBooks = async () => {
    const response = await axios(`${process.env['REACT_APP_API_SERVER']}/books`);
    return response;
}

export const createBook = async (book) => {
    await axios.post(`${process.env['REACT_APP_API_SERVER']}/books`,book)
        .then(res => {
            console.log(res.data);
        });
}