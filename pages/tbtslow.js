import SlowComponent from "./slowComponent";



export default function TbtSlow(){

    return <>
        <div>Hi!</div>
        {Array(1000).map((_,key) => <SlowComponent key={key} />)}
    </>
}