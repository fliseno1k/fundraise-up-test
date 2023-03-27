import React, { forwardRef } from 'react';

import s from './Input.module.scss';

import type { PropsOf } from '@/shared/types';

import cn from 'classnames';

export interface InputProps extends PropsOf<'input'> {
    sign?: string;
    labelProps?: PropsOf<'label'>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { sign, id, className, labelProps, ...rest } = props;

    const composedInputClassName = cn(s.input, {
        [s.input_withSign]: !!sign,
    });

    return (
        <label htmlFor={id} className={cn(s._, className)} {...labelProps}>
            {!!sign && (
                <span aria-hidden={true} className={s.sign}>
                    {sign}
                </span>
            )}
            <input ref={ref} id={id} className={composedInputClassName} {...rest} />
        </label>
    );
});
