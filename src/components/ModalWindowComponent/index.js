import React from "react";
import BookViewer from "./BookViewer";
import './style.css'

const ModalWindowComponent = ({number}) =>{
    console.log(number)
    return (
        <div className="modal-background">
            <div className="modal-book-info-wrapper"> info block</div>
            <div className="modal-book-viewer-wrapper">
                <BookViewer number={"0738531367"}/>
            </div>
        </div>
    )
}

export default ModalWindowComponent