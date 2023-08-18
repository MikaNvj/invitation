import React, { useState, MouseEvent } from "react";
import './page.scss'
import { height, width } from "../Atom/Page";
import { useRecoilState } from "recoil";
import Child from "../Child";
import { mapingchild } from "../Atom/Child";
import { x, y } from "../Atom/text";

const Page = (props :{child: any[]}) => {
    const [widthpage, setwidthpage] = useRecoilState(width);
    const [heigthpage, setheightpage] = useRecoilState(height);


    return (
        <div className="parentcontain" style={{width: `${widthpage}px`, height: `${heigthpage}px`, flexWrap: 'wrap' }}>
           {props.child.map(e => <Child information={e} />)}

        </div>

    )
}

export default Page;