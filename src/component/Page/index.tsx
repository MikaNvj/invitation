import React from "react";
import './page.scss'
import { height, width } from "../Atom/Page";
import { useRecoilState } from "recoil";
import Child from "../Child";
import { mapingchild } from "../Atom/Child";

const Page = () => {
    const [widthpage, setwidthpage] = useRecoilState(width);
    const [heigthpage, setheightpage] = useRecoilState(height);
    const [mapchild, setmapchild] = useRecoilState(mapingchild)
    return (
        <div className="parentcontain" style={{width: `${widthpage}px`, height: `${heigthpage}px`, flexWrap: 'wrap' }}>
           {mapchild.map(e => <Child />)}

        </div>

    )
}

export default Page;