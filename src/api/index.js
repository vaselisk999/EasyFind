import axios from 'axios';
const API_key = "AIzaSyBHjWHoinFLiY5XsV8Hze0Zvz-oZ9rrl5k";

// Function to get volumes data from googleapis API
const getBooksData = async (searchTerm, callback) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&api-key=${API_key}`)
        console.log(response, "response")
        callback(response.data);
    } catch (error) {
        console.log(error);
    }
}

export  {
    getBooksData
}

