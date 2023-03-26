import React, { forwardRef } from 'react';
import { PropsOf } from 'shared/types';

import s from './Button.module.scss';

export type ButtonProps = PropsOf<'button'>;

import cn from 'classnames';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { className, children, ...rest } = props;

    return (
        <button ref={ref} className={cn(s._, className)} {...rest}>
            {children}
        </button>
    );
});
