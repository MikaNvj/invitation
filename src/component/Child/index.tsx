import React, { useState, MouseEvent } from "react";
import './child.scss'
import { heightchild, image, mapingchild, widthchild } from "../Atom/Child";
import { useRecoilState } from "recoil";
import { MouseEventHandler } from "react";
import { x, y } from "../Atom/text";
import { datashow, textmaping } from "../Atom/Data";

const Child = (props: {information: any}) => {
    const [widthchilds, setwidthchilds] = useRecoilState(widthchild);
    const [heightchilds, setheightchilds] = useRecoilState(heightchild)
    const [design, setdesign] = useRecoilState(image);

    const [mapchild, setmapchild] = useRecoilState(mapingchild);
    const [conditionmouve, setcoditionposition] = useState(false);
    const [text,settext] = useRecoilState(textmaping)

    const [position,setposition] = useState({x: 0, y: 0});
     function mouseUp(event: MouseEvent){
        setposition({x: 0, y: 0})
        setcoditionposition(false)

       
     }
     function mouseMouve(event: MouseEvent){
        if(conditionmouve){
            const finalx = event.clientX;
            const finaly = event.clientY;
            let nowx = finalx - position.x;
            let nowy = finaly - position.y;
            setpositionx(nowx)
            setpositiony(nowy)
            const target = event.target as HTMLElement;
            target.style.transform = `translate(${nowx}px, ${nowy}px)`;
        }
        
     }

     function mouseDown(event: MouseEvent){

        setcoditionposition(true)
        const initx = event.clientX;
        const inity = event.clientY;
        setposition({x: initx, y: inity})


     }

    const [positionx, setpositionx] = useRecoilState(x)
    const [positiony, setpositiony] = useRecoilState(y)
    const tab = props.information


    return(
        <div className="pagecontainer" style={{ width: `${widthchilds}px`, height: `${heightchilds}px`, backgroundImage: `url(${design})`}}>
            { text.map((e,index) => <p  key={index} className="text" onMouseUp={mouseUp} onMouseMove={mouseMouve} onMouseDown={mouseDown}>{tab[e]}</p>)}
        </div>  
    )
}

export default Child;