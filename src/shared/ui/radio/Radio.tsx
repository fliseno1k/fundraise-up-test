import React, { FC, forwardRef } from 'react';
import { PropsOf } from 'shared/types';

import cn from 'classnames';

import s from './Radio.module.scss';

export type RadioProps = PropsOf<'input'>;

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
    const { id, className, children, ...rest } = props;

    const composedClassName = cn(s._, className);

    return (
        <label htmlFor={id} className={composedClassName}>
            <span className={s.radio}>
                <input ref={ref} type='radio' className={s.input} {...rest}></input>
                <span className={s.inner}></span>
            </span>
            <span className={s.option}>{children}</span>
        </label>
    );
});
