import {useEffect, useState} from "react";

//Three buttons,
//Start button => Start the counter, should show Hours, Minutes, Seconds (Updating every second)
//Stop button => Stop the counter, if user clicks start, it will be resumed from that same point
//Reset button => Will reset the counter to 0

const TimeCounter=()=>{
    const [running,setRunning]=useState(false);
    const [currentTime,setCurrentTime]=useState(0);

    useEffect(()=>{
        let intervalId: number | undefined;
        if(running){
            intervalId=setInterval(()=>{
                setElapsedTime(prevTime=>prevTime+1000);
                setCurrentTime(Date.now);
            },1000);
        }
        else{
            clearInterval(intervalId);
        }
        return()=>clearInterval(intervalId);

    },[running]);
    const startTimeCounter=()=>{
        setRunning(true);
        setCurrentTime(Date.now());
        };
    const stopTimeCounter=()=>{
        setRunning(false);
    };
    const resetTimeCounter=()=>{
        setRunning(false);
        setCurrentTime(0);
        setElapsedTime(0);
    }
    const formatTime=(time: number)=>{
        const hours=Math.floor(time/3600000);
        const minutes=Math.floor((time%360000)/60000);
        const seconds=Math.floor((time%60000)/1000);

        return <div className="inline-flex items-center"><div className="w-36 m-5 p-10 border-2 rounded-full border-solid border-white">{`${hours.toString().padStart(2,'0')}`}</div>
        :
        <div className="w-36 m-5 p-10 border-2 rounded-full border-solid border-white">
        {`${minutes.toString().padStart(2,"0")}`}</div>
        :
        <div className="w-36 m-5 p-10 border-2 rounded-full border-solid border-white">
        {`${seconds.toString().padStart(2,'0')}`}</div>
        </div>
    }
    const [elapsedTime,setElapsedTime]=useState(0);
    return(
        <section>
            <h1>TIME COUNTER</h1>
            <div className="mt-20"><h1>{formatTime(elapsedTime)}</h1></div>
            
            <div className="mt-20 space-x-5">
                <button className="bg-black text-white border-white border-spacing-5" onClick={startTimeCounter}>Start</button>
                <button className="bg-black text-white border-white border-spacing-5 " onClick={stopTimeCounter}>Stop</button>
                <button className="bg-black text-white border-white border-spacing-5 " onClick={resetTimeCounter}>Reset</button>
            </div>
        </section>
    )
}
export default TimeCounter;

// let [counterValue,changeCounter]=useState(0);
// const Increment=()=>{
//     changeCounter(counterValue++);
// };
// const Decrement=()=>{
//     changeCounter(counterValue--);
// };
// const Reset=()=>{
//     changeCounter(counterValue=0);
// }
// return(
//     <section className="mb-10 flex flex-col">
//         <h2>Count is:</h2>
//         <p>{counterValue}</p>
//         <div className="flex gap-16 justify-center">
//             <button className="text-black" onClick={Increment}>+ Increase</button>
//             <button className="text-black" onClick={Decrement}>- Decrease</button>
//         </div>
//         <div className="mt-5">
//             <button className="text-black" onClick={Reset}>Reset</button>
//         </div>
//     </section>
// )
