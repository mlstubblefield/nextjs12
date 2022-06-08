export default function SlowComponent(){
    let numero=0;
    for(let i=0;i<10000;i++){
        numero+=i;
    }
    return <div>Hello {numero}</div>
}