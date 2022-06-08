import React, { Suspense } from "react";
import SlowComponent from "./slowComponent";



export default function TbtFast(){

    return <>
        <div>Hi!</div>
        {[...Array(10000).keys()].map((_,key) => <Suspense key={key} fallback="loadin'..."><SlowComponent/></Suspense>)}
    </>
}