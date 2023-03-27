import React, { forwardRef } from 'react';

import s from './Input.module.scss';

import type { PropsOf } from '@/shared/types';

import cn from 'classnames';

export interface InputProps extends PropsOf<'input'> {
    currency?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { currency, id, className, ...rest } = props;

    const composedInputClassName = cn(s.input, {
        [s.input_price]: !!currency,
    });

    return (
        <label htmlFor={id} className={cn(s._, className)}>
            {!!currency && <span aria-hidden={true} className={s.currency}></span>}
            <input ref={ref} id={id} className={composedInputClassName} {...rest} />
        </label>
    );
});
