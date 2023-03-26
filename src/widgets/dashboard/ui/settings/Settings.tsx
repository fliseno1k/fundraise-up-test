import React, { FC } from 'react';

import s from './Settings.module.scss';

import cn from 'classnames';
import { Select } from '../../../../shared/ui/select';
import { Range } from '../../../../shared/ui/range';
import { Input } from '../../../../shared/ui/input';
import { Radio } from '../../../../shared/ui/radio';
import { Button } from '../../../../shared/ui/button';
import { Checkbox } from '../../../../shared/ui/checkbox';

export const Settings: FC = () => {
    return (
        <form className={cn(s._, 'card')}>
            <div className={s.tabs}>
                <div className={s.tabsList}>
                    <button type='button' className={cn(s.tab, s.tab_active)}>
                        Behavior
                    </button>
                    <button type='button' className={s.tab}>
                        Appearance
                    </button>
                    <button type='button' className={s.tab}>
                        Custom Fields
                    </button>
                    <button type='button' className={s.tab}>
                        Questions
                    </button>
                    <button type='button' className={s.tab}>
                        Url control
                    </button>
                </div>
            </div>
            <div className='divider' />
            <div className={s.body}>
                <div className={s.field}>
                    <div className={s.field__label}>Designation</div>
                    <div className={s.field__container}>
                        <div className={s.inputs}>
                            <Select
                                options={[
                                    {
                                        value: 'Match Checkout Setting',
                                        label: 'Match Checkout Setting',
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className={s.field}>
                    <div className={s.field__label}>Goal</div>
                    <div className={s.field__container}>
                        <div className={s.inputs}>
                            <Input className={s.amount} />
                            <div className={s.currency}>
                                <Select
                                    options={[
                                        {
                                            value: 'USD',
                                            label: 'USD',
                                        },
                                        {
                                            value: 'GEL',
                                            label: 'GEL',
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.field}>
                    <div className={s.field__label} style={{ marginTop: 0 }}>
                        Default Amount
                    </div>
                    <div className={s.field__container}>
                        <div className={s.radios}>
                            <Radio>Match Checkout Setting</Radio>
                            <Radio checked>Customize</Radio>
                        </div>
                    </div>
                </div>
                <div className={s.field}>
                    <div className={s.field__label}></div>
                    <div className={s.field__container}>
                        <div className={s.radios}>
                            <Checkbox>Allow donor to change default currency</Checkbox>
                        </div>
                    </div>
                </div>
                <div className={s.field}>
                    <div className={s.field__label}>Border size</div>
                    <div className={s.field__container}>
                        <Range className={s.range} />
                    </div>
                </div>
                <div className={s.field} style={{ marginTop: '-12px' }}>
                    <div className={s.field__label}>Border size</div>
                    <div className={s.field__container}>
                        <Range className={s.range} />
                    </div>
                </div>
            </div>
            <div className='divider' />
            <div className={s.extra}>
                <Button>Save changes</Button>
                <Button>Cancel</Button>
            </div>
        </form>
    );
};
