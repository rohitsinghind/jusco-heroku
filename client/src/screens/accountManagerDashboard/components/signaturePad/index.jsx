import React from "react";
import SignaturePad from 'react-signature-canvas'
import { useRef } from "react";

export default function UsrSign(){
    let sigPad = useRef({})
    let data="";

    function clear(){
        sigPad.current.clear()
    }

    function show(){
        sigPad.current.fromDataURL(data)
    }

    function save(){
        data = sigPad.current.toDataURL()
        alert("Signature Saved")
        clear()
        show()
    }

    return(
     <div>
        <SignaturePad
            ref={sigPad}
        />
        <div className="controls">
        <button onClick={clear} className="clear">Clear</button>
        <button onClick={save} className="save">Save</button>
        </div>

     </div>
        
     
    )
}