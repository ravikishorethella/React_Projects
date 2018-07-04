import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="selected option"
    onRequestClose={props.handleClearOptionModal}
  >
    <h3>selected option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearOptionModal}>close</button>
  </Modal>
);

export default OptionModal;
