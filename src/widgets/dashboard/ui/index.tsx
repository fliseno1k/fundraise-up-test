import React, { FC } from 'react';
import { Container } from '../../../shared/ui/container';

import s from './styles.module.scss';

import { Header } from './header';
import { Summary } from './summary';
import { Floating } from './floating';
import { Settings } from './settings/Settings';

export const Dashboard: FC = () => {
    return (
        <Container>
            <div className={s._}>
                <Header />
                <div className={s.grid}>
                    <div className={s.grid__body}>
                        <Summary />
                        <Settings />
                    </div>
                    <div className={s.grid__sidebar}>
                        <Floating />
                    </div>
                </div>
            </div>
        </Container>
    );
};
