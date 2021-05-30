import React, { useState } from 'react';
import { UserType } from '../types/UserType';


const Login: React.FC<UserType> = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(count + 1);
        console.log(count);
    };
    return (
        <div>
            <h1>Login</h1>
            {count}
            <button onClick={increment}>up</button>
        </div>
    );
};

export default Login
