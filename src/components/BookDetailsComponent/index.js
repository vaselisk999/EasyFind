import React, { useEffect, useState } from "react";
import { useNavigate, useParams  } from "react-router-dom";
import BookViewer from "../BookViewer/BookViewer";
import { getBooksDataByID } from './../../api';
import './style.css'

const BookDetailsComponent = ({number}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        getBookDetales();
    },[]);

    const backButton = () => {
        navigate("/");
    }

    const getBookDetales = () => {
        getBooksDataByID(id, (data) => {
            setData(data);
        })
    }

    return (
        <section className="modal-background row">
            
            <div className="modal-book-info-wrapper  col-sm-1 col-md-1 col-lg-1 col-xl-4"> 
                <h5>{data?.volumeInfo?.title}</h5>
                <h5>{data?.volumeInfo?.publisher}</h5> 
                <h5>{data?.volumeInfo?.publishedDate}</h5> 
                <h5>{data?.volumeInfo?.authors}</h5>
                <button type="button" onClick={backButton}>Go back</button>
            </div>
            <div className="modal-book-viewer-wrapper  col-sm-1 col-md-1 col-lg-1 col-xl-8">
                <BookViewer number={number}/>
            </div>
        </section>
    )
}

export default BookDetailsComponent