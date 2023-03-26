import React, { FC, forwardRef } from 'react';
import { PropsOf } from 'shared/types';

import cn from 'classnames';

import s from './Range.module.scss';

export type RangeProps = PropsOf<'input'>;

export const Range = forwardRef<HTMLInputElement, RangeProps>((props, ref) => {
    const { id, className, ...rest } = props;

    const composedClassName = cn(s._, className);

    return (
        <label htmlFor={id} className={composedClassName}>
            <span className={s.range}>
                <input ref={ref} type='range' className={s.input} {...rest}></input>
            </span>
            <span className={s.option}>18px</span>
        </label>
    );
});
