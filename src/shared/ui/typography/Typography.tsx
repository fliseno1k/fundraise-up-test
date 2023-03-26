import React, { FC, ComponentPropsWithoutRef } from 'react';

type InlineElementProps = ComponentPropsWithoutRef<'span'>;

import s from './Typography.module.scss';
export interface TypographyProps extends InlineElementProps {
    type: 'title' | 'subtitle';
    level: number;
    variant?: 'success' | 'base' | 'secondary' | 'link';
}

import cn from 'classnames';

export const Typography: FC<TypographyProps> = (props) => {
    const { type, level, variant = 'base', className, children, ...rest } = props;

    const composedClassName = cn(s._, s[`${type}_${level}`], s[`variant_${variant}`], className);

    const Tag = 'span';

    return (
        <Tag className={composedClassName} {...rest}>
            {children}
        </Tag>
    );
};
