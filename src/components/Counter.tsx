import React, {useState} from 'react';
import './Counter.scss'
const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div onClick={() => setCount(prevState => prevState + 1)}>
            {count}
        </div>
    );
};

export default Counter;