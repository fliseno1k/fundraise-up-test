import React, { FC } from 'react';

import cn from 'classnames';

import s from './Header.module.scss';
import { Select } from '@/shared/ui/select';

export const Header: FC = () => {
    return (
        <div className={cn(s._, 'card')}>
            <div className={s.top}>
                <h2 className={s.title}>Donations</h2>
            </div>
            <div className='divider' />
            <form className={s.bottom}>
                <div className={s.search}>
                    <span className={s.search__iconSlot}>
                        <svg
                            width='18'
                            height='18'
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z'
                                stroke='#6C6D6F'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M15.7499 15.7499L12.4874 12.4874'
                                stroke='#6C6D6F'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </span>
                    <input
                        type='text'
                        aria-label='Search'
                        placeholder='Search'
                        className={s.search__input}
                    />
                </div>
                <Select
                    id='status'
                    labelProps={{
                        'aria-label': 'Sort by status',
                    }}
                    required
                    aria-invalid={false}
                    className={s.select}
                    options={[
                        { value: 'All statuses', label: 'All statuses' },
                        { value: 'Newest', label: 'Newest' },
                        { value: 'Oldets', label: 'Oldets' },
                    ]}
                />
            </form>
        </div>
    );
};
