import React from 'react';
import { createRoot } from 'react-dom/client';

import s from './style.module.scss';

function App() {
    return (
        <div className={s._}>
            <h1 className={'s'}>Hello React!</h1>
        </div>
    );
}

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
