import React, { forwardRef } from 'react';
import { PropsOf } from '@/shared/types';

import s from './Button.module.scss';

export interface ButtonProps extends PropsOf<'button'> {
    variant?: 'primary' | 'base';
}

import cn from 'classnames';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { className, variant = 'base', children, ...rest } = props;

    const composedClassName = cn(s._, s[`variant_${variant}`], className);

    return (
        <button ref={ref} className={composedClassName} {...rest}>
            {children}
        </button>
    );
});
