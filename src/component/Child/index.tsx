import React from "react";
import './child.scss'
import { heightchild, image, mapingchild, widthchild } from "../Atom/Child";
import { useRecoilState } from "recoil";

const Child = () => {
    const [widthchilds, setwidthchilds] = useRecoilState(widthchild);
    const [heightchilds, setheightchilds] = useRecoilState(heightchild)
    const [design, setdesign] = useRecoilState(image);
    const [mapchild, setmapchild] = useRecoilState(mapingchild);
    

    return(
        <div className="pagecontainer" style={{ width: `${widthchilds}px`, height: `${heightchilds}px`, backgroundImage: `url(${design})`}}>

        </div>
    )
}

export default Child;