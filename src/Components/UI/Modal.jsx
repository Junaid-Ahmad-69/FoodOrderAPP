import classes from "./Modal.module.css"
import ReactDOM from "react-dom";


const BackDrop = ({onClose}) => {
    return (
        <div className={classes.backdrop} onClick={onClose}>
        </div>
    );
}


const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    );
}

const overlay = document.getElementById("overlays")

const Modal = ({onClose, children}) => {
    return (
        <>
            {ReactDOM.createPortal(<BackDrop onClose={onClose}/>, overlay)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, overlay)}
        </>
    );
}

export default Modal;
