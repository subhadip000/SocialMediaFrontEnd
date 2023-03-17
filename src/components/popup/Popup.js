import React from 'react'
import './Popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className="popup-inner">
                <div className="popup-header">
                    <h1>{props.name}</h1>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>
                        Close
                    </button>
                </div>
                <div className="popup-Child">
                    {props.children}
                </div>

            </div>
        </div>
    ) : "";
}

export default Popup