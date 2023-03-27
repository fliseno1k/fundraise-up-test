import React, { ChangeEvent, ChangeEventHandler, forwardRef, useState } from 'react';
import { PropsOf } from '@/shared/types';

import cn from 'classnames';

import s from './Range.module.scss';

export type RangeProps = PropsOf<'input'>;

export const Range = forwardRef<HTMLInputElement, RangeProps>((props, ref) => {
    const { id, className, value, onChange, ...rest } = props;

    const [state, setState] = useState(0);

    const composedClassName = cn(s._, className);

    return (
        <label htmlFor={id} className={composedClassName}>
            <span className={s.range}>
                <input
                    ref={ref}
                    type='range'
                    className={s.input}
                    value={state}
                    onChange={(e) => setState(Number.parseInt(e.target.value))}
                    style={{
                        backgroundSize: ((state - 0) * 100) / 100 + '% 100%',
                    }}
                    {...rest}
                ></input>
            </span>
            <span className={s.option}>18px</span>
        </label>
    );
});
