import React,{ FormEvent, KeyboardEvent, useEffect, useState } from "react";
import './class.scss'
import { useRecoilState } from "recoil";
import { font } from "../Atom/text";
import { Font } from "../type/type";

const Class = () => {
    const [fontcustom, setfontcustom] = useRecoilState(font);
    const [fonts, setfonts] = useState([])
    
    function getfont(e: FormEvent) {
        const value = (e.target as HTMLInputElement).value;
        const name = (e.target as HTMLInputElement).name;
        setfonts((prevs) => ({...prevs, [name]: value }));
    }

    function seter(){
        setfontcustom([...fontcustom, fonts as any])
        
        
    }

    useEffect(()=>{

        console.log(fontcustom)
    },[fontcustom])
    return (
        <div className="classes">
            <div>
                <button onClick={seter}>font</button>
                <select onChange={getfont} name="family">
                    <option value="ma">Helvetica</option>
                    <option value="ma">Sengoe</option>
                    <option value="ma">Helvetica</option>
                    <option value="ma">Helvetica</option>
                </select>
            </div>
            <div>
                <label >size</label>
                <input type="number" name="size" onInput={getfont} />
            </div>
        </div>
    )
}

export default Class