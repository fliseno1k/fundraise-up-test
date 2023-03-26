import React, { FC } from 'react';

import type { PropsOf } from 'shared/types';

import s from './Container.module.scss';

import cn from 'classnames';

export const Container: FC<PropsOf<'div'>> = (props) => {
    const { className, ...rest } = props;

    return <div className={cn(s._, className)} {...rest} />;
};
