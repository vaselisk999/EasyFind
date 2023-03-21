import React, {useRef, useEffect, useState} from "react";
import BookViewer from "./BookViewer";
import './style.css'

const ModalWindowComponent = ({number}) =>{
    console.log(number)
    return (
        <div className="modal-background">
            <div className="book-info-wrapper"> info block</div>
            <div className="book-viewrr-wrapper">
                <BookViewer number={"0738531367"}/>
            </div>
        </div>
    )
}

export default ModalWindowComponent