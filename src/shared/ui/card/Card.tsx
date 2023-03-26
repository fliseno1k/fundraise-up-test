import React, { FC } from 'react';

import s from './Card.module.scss';

import cn from 'classnames';

import type { PropsOf } from 'shared/types';

export type CardProps = PropsOf<'div'>;

export const Card: FC<CardProps> = (props) => {
    const { className, ...rest } = props;

    return <div className={cn(s._, className)} {...rest} />;
};
