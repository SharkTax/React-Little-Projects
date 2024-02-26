import { useState } from "react"
import Modal from "./modal-test"


export default function ModalTest(){
    const [showModalPopup, setShowModalPopup] = useState(false)

    function handleTogleModalPopup(){
        setShowModalPopup(!showModalPopup)
    }

    function onClose(){
        setShowModalPopup(false)
    }

    return (
        <div>
            <button onClick={handleTogleModalPopup}>Open Model PpUp</button>
            {
                showModalPopup && <Modal
                onClose={onClose}
                body={<div>Customized body</div>}/>
            }
        </div>
    )
}