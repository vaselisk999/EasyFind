import axios from 'axios';
const API_key = "AIzaSyBHjWHoinFLiY5XsV8Hze0Zvz-oZ9rrl5k";

// Function to get volumes data from googleapis API
const getBooksData = async (searchTerm, callback) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=free-ebooks&api-key=${API_key}`)
        callback(response.data);
    } catch (error) {
        console.log(error);
    }
}
// gets book by volumeId
const getBooksDataByID = async (volumeId, callback) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${volumeId}?api-key=${API_key}`)
        callback(response.data);
    } catch (error) {
        console.log(error);
    }
}

export  {
    getBooksData,
    getBooksDataByID
}

