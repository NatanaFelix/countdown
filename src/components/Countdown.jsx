import React, { useState, useEffect, useRef } from "react"
import './Countdown.css'


const Countdown = () => {
 
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinuts, setTimerMinuts] = useState('000');
    const [timerSeconds, setTimerSecods] = useState('00');

    const interval = useRef();

    const satartTimer = () => {
        const CountdounDate = new Date('Dec 25, 2021 00:00:00').getTime();
            
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = CountdounDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor(distance / (1000 * 60 * 60 ) % 24)
            const minuts = Math.round(distance % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60 )) / 1000);

            // alert(hours.toFixed(2));
        
            if(distance < 0){
                clearInterval(interval.current);
            }else{
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinuts(minuts)
                setTimerSecods(seconds)
            }

        }, 1000);
    };

    useEffect(() => {
        satartTimer();
        return() => {
            clearInterval(interval.current);
        }
    })



  return (
    <div className='tudo'>    
        <div className='frase'>
            WE'RE LAUNCHING SOON
        </div>    
        <div className='time-section'>
            <div className="Primeiro">
                {timerDays}
            </div>
            <div className="time-text">
                DIAS
            </div>            
        </div>
        <div className='time-section'>
            <div className="Primeiro">
                {timerHours}
            </div>
            <div className="time-text">
                HORAS
            </div>            
        </div>
        <div className='time-section'>
            <div className="Primeiro">
                {timerMinuts}
            </div>
            <div className="time-text">
                MINUTOS
            </div>            
        </div>
        <div className='time-section'>
            <div className="Primeiro">
                {timerSeconds}
            </div>
            <div className="time-text">
                SEGUNDOS
            </div>            
        </div>
    </div>

  );
};

export default Countdown;

