
import React, { useEffect, useRef } from 'react'
import "./Counter.css"

const Counter = ({ target, title }) => {
  const counterRef = useRef(null);
  const speed = 200; 

  useEffect(() => {
    const counter = counterRef.current;
    if (!counter) return;

    const updateCount = () => {
      const targetValue = +target;
      const count = +counter.innerText;
      const inc = targetValue / speed;

      if (count < targetValue) {
        counter.innerText = Math.ceil(count + inc );
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = targetValue;
      }
    };

    updateCount();
  }, [target]);

  return (
    <div className="counter-item">
      <h3 className="counter-title">{title}</h3>
      <div className='flex'>

      <div className="counter" ref={counterRef} data-target={target}>0</div>
      <span className='text-2xl font-bold'>+</span>
      </div>
    </div>
  )
}

export default Counter
