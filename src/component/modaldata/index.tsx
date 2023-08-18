import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import './modaldata.scss'
import { useRecoilState } from "recoil";
import { datashow, textmaping } from "../Atom/Data";

const AddData = () => {
    const [textmap,settextmap] = useRecoilState(textmaping);
    const [input, setinput] =useState< string>();
    const [showthis,setshowthis] = useRecoilState(datashow);
    function onChange(e: ChangeEvent<HTMLInputElement>){
        const val = (e.target as HTMLInputElement).value
        setinput(val)
    }
    function setdata(){
        settextmap([...textmap, input])
        setshowthis(!showthis)
        
    }
    return(
        <div className="Adddata">
            <div className="containerdata">
                <p>Donnée a afficher</p>
                <input type="text" onChange={onChange}/>
                <button onClick={setdata}>Sauvegarder</button>
            </div>
        </div>
    )
}

export default AddData