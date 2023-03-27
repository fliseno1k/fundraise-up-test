import React, { forwardRef } from 'react';

import s from './Select.module.scss';

import type { PropsOf } from '@/shared/types';

import cn from 'classnames';

export interface SelectProps extends PropsOf<'select'> {
    options: { value: string; label: string }[];
    labelProps?: PropsOf<'label'>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
    const { id, className, options, labelProps, ...rest } = props;

    const composedInputClassName = cn(s.select, {});

    return (
        <label htmlFor={id} className={cn(s._, className)} {...labelProps}>
            <select ref={ref} id={id} className={composedInputClassName} {...rest}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
});
