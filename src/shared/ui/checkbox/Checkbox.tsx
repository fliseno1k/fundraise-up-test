import React, { forwardRef } from 'react';
import { PropsOf } from '@/shared/types';

import cn from 'classnames';

import s from './Checkbox.module.scss';

export type CheckboxProps = PropsOf<'input'>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
    const { id, className, children, ...rest } = props;

    const composedClassName = cn(s._, className);

    return (
        <label htmlFor={id} className={composedClassName}>
            <span className={s.checkbox}>
                <input id={id} ref={ref} type='checkbox' className={s.input} {...rest}></input>
                <span className={s.inner}>
                    <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M16.6654 5L7.4987 14.1667L3.33203 10'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </span>
            </span>
            <span className={s.option}>{children}</span>
        </label>
    );
});
