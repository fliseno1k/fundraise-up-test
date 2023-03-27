import React, { FC } from 'react';

import s from './Settings.module.scss';

import cn from 'classnames';
import { Select } from '@/shared/ui/select';
import { Range } from '@/shared/ui/range';
import { Input } from '@/shared/ui/input';
import { Radio } from '@/shared/ui/radio';
import { Button } from '@/shared/ui/button';
import { Checkbox } from '@/shared/ui/checkbox';

export const Settings: FC = () => {
    return (
        <form className={cn(s._, 'card')}>
            <div className={s.tabs}>
                <div className={s.tabs__wrapper}>
                    <div role='tablist' className={s.tabs__list}>
                        <button
                            type='button'
                            role='tab'
                            id='tab-1'
                            aria-selected={true}
                            aria-controls='panel-1'
                            className={cn(s.tabs__tab, s.tabs__tab_active)}
                        >
                            Behavior
                        </button>
                        <button
                            type='button'
                            role='tab'
                            id='tab-2'
                            aria-selected={false}
                            aria-controls='panel-2'
                            className={s.tabs__tab}
                        >
                            Appearance
                        </button>
                        <button
                            type='button'
                            role='tab'
                            id='tab-3'
                            aria-selected={false}
                            aria-controls='panel-3'
                            className={s.tabs__tab}
                        >
                            Custom Fields
                        </button>
                        <button
                            type='button'
                            role='tab'
                            id='tab-4'
                            aria-selected={false}
                            aria-controls='panel-4'
                            className={s.tabs__tab}
                        >
                            Questions
                        </button>
                        <button
                            type='button'
                            role='tab'
                            id='tab-5'
                            aria-selected={false}
                            aria-controls='panel-5'
                            className={s.tabs__tab}
                        >
                            Url control
                        </button>
                    </div>
                </div>
            </div>
            <div className={s.body}>
                <div id='panel-1' role='tabpanel' aria-labelledby='tab-1' className={s.panel}>
                    <div className={s.field}>
                        <div className={s.field__label}>Designation</div>
                        <div className={s.field__container}>
                            <div className={s.inputs}>
                                <Select
                                    id='designation'
                                    options={[
                                        {
                                            value: 'Match Checkout Setting',
                                            label: 'Match Checkout Setting ',
                                        },
                                        {
                                            value: 'Match Checkout Setting second option',
                                            label: 'Match Checkout Setting second option ',
                                        },
                                        {
                                            value: 'Match Checkout Setting third option',
                                            label: 'Match Checkout Setting third option',
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
                                <Input
                                    id='donation-amount'
                                    sign='$'
                                    autoComplete='false'
                                    inputMode='decimal'
                                    value={10}
                                    labelProps={{
                                        'aria-label': 'Donation amount',
                                    }}
                                    className={s.amount}
                                />
                                <div className={s.currency}>
                                    <Select
                                        id='donation-currency'
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
                                        labelProps={{
                                            'aria-label': 'Donation currency',
                                        }}
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
                                <Radio id='default-amount-1' name='default-amount'>
                                    Match Checkout Setting
                                </Radio>
                                <Radio id='default-amount-2' name='default-amount' checked>
                                    Customize
                                </Radio>
                            </div>
                        </div>
                    </div>
                    <div className={s.field}>
                        <div className={s.field__label}></div>
                        <div className={s.field__container}>
                            <div className={s.radios}>
                                <Checkbox id='agreement'>
                                    Allow donor to change default currency
                                </Checkbox>
                            </div>
                        </div>
                    </div>
                    <div className={s.field}>
                        <div className={s.field__label}>Border size</div>
                        <div className={s.field__container}>
                            <Range id='border-size' className={s.range} />
                        </div>
                    </div>
                    <div className={s.field} style={{ marginTop: '-8px' }}>
                        <div className={s.field__label}>Border radius</div>
                        <div className={s.field__container}>
                            <Range id='border-size' className={s.range} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='divider' />
            <div className={s.extra}>
                <Button type='submit' variant='primary'>
                    Save changes
                </Button>
                <Button type='button' variant='base'>
                    Cancel
                </Button>
            </div>
        </form>
    );
};
