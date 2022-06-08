import React, { Suspense } from "react";
import SlowComponent from "./slowComponent";



export default function TbtFast(){

    return <>
        <div>Hi!</div>
        {Array(1000).map(_ => <Suspense fallback="loadin'..."><SlowComponent/></Suspense>)}
    </>
}