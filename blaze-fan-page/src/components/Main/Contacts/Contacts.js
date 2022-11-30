import { useState } from 'react';

export const Contacts = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>Contacts</p>
            <p>Test Counts: {count} clicks</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}