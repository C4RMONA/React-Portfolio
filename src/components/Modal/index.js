import React from "react";
import { Button } from "react-bootstrap";
function Modal({ onClose, currentGif }) {

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h1>{currentGif.name}</h1>
        <h5>hello{currentGif.description}</h5>
        <p>Built With: {currentGif.built}</p>
        <img className="gif-img" src={require(`../../assets/gifs/${currentGif.category}/${currentGif.category}.gif`)} />
        <p></p>
        <Button className="modal-btn" variant="primary" onClick={onClose}>
          Close this modal
        </Button>
      </div>
    </div>
  );
}

export default Modal;