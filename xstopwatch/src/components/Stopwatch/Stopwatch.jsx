import {React, useEffect, useState, useRef} from 'react';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';

export default function Stopwatch(){
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef();

    const startStop = ()=>{
        setIsRunning(!isRunning);
    }
    const reset = ()=>{
        setIsRunning(false);
        setTime(0);
    }

    useEffect(()=>{
        if(isRunning){
            timerRef.current = setInterval(()=>{
                setTime((prevTime)=>prevTime+1)
            }, 1000)
        }
        else{
            clearInterval(timerRef.current);
        }
        return ()=>{
            clearInterval(timerRef.current);
        }
    }, [isRunning])

    return (
        <>
            <h1>Stopwatch</h1>
            <Timer time={time}/>
            <Button label={isRunning? 'Stop' : 'Start'} onclick={startStop}/>
            <Button label='Reset' onclick={reset}/>
        </>
    )
}