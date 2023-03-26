import React, { FC } from 'react';

import cn from 'classnames';

import s from './Header.module.scss';

export const Header: FC = () => {
    return (
        <div className={cn(s._, 'card')}>
            <div className={s.top}>
                <h2 className={s.title}>Donations</h2>
            </div>
            <div className='divider' />
            <div className={s.bottom}>
                <form className={s.search}>
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
                    <select
                        required
                        aria-required
                        aria-invalid={false}
                        placeholder='Select status'
                        className={s.select}
                    >
                        <option disabled hidden>
                            Select status
                        </option>
                        <option value='All statuses'>All statuses</option>
                        <option value='Newest'>Newest</option>
                        <option value='Oldets'>Oldest</option>
                        <option value='Option with ellipsis text'>Option with ellipsis text</option>
                    </select>
                </form>
            </div>
        </div>
    );
};
