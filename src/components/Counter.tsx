import React, {useState} from 'react';
import s from './Counter.module.scss';
const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div className={s.counter} onClick={() => setCount(prevState => prevState + 1)}>
            {count}
        </div>
    );
};

export default Counter;