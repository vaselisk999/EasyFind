import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookViewer from "../BookViewer/BookViewer";
import { getBooksDataByID } from './../../api';
import './style.css'

const BookDetailsComponent = ({ number }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        if (id) {
            getBooksDataByID(id, (data) => {
                setData(data);
            })
        }
    }, [id]);

    const backButton = () => {
        navigate("/");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="modal-book-info-wrapper  col-4 col-sm-1 col-md-1 col-lg-1 col-xl-4">
                    <h5>Title: {data?.volumeInfo?.title}</h5>
                    <h5>Publisher: {data?.volumeInfo?.publisher}</h5>
                    <h5>Date: {data?.volumeInfo?.publishedDate}</h5>
                    <h5>Authors: {data?.volumeInfo?.authors}</h5>
                    <button type="button" onClick={backButton}>Go back</button>
                </div>
                <div className="modal-book-viewer-wrapper  col-8 col-sm-1 col-md-1 col-lg-1 col-xl-8">
                    <BookViewer number={number} />
                </div>
            </div>
        </div>
    )
}

export default BookDetailsComponent