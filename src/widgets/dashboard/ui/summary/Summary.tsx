import React, { FC } from 'react';

import s from './Summary.module.scss';

import cn from 'classnames';

export const Summary: FC = () => {
    return (
        <div className={cn(s._, 'card')}>
            <div className={s.top}>
                <div className={s.donation}>
                    <span className={s.donation__label}>
                        <div className={s.donation__icon}>
                            <svg
                                width='18'
                                height='18'
                                viewBox='0 0 18 18'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M9 0.75V17.25'
                                    stroke='#009FFD'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M12.75 3.75H7.125C6.42881 3.75 5.76113 4.02656 5.26884 4.51884C4.77656 5.01113 4.5 5.67881 4.5 6.375C4.5 7.07119 4.77656 7.73887 5.26884 8.23116C5.76113 8.72344 6.42881 9 7.125 9H10.875C11.5712 9 12.2389 9.27656 12.7312 9.76884C13.2234 10.2611 13.5 10.9288 13.5 11.625C13.5 12.3212 13.2234 12.9889 12.7312 13.4812C12.2389 13.9734 11.5712 14.25 10.875 14.25H4.5'
                                    stroke='#009FFD'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </div>
                        <span className={s.donation__text}>Donation</span>
                    </span>
                    <span className={s.donation__value}>
                        <span className={cn(s.donation__amount, s.donation__amount_primary)}>
                            $20.60 USD
                        </span>
                        <span className={cn(s.donation__amount, s.donation__amount_secondary)}>
                            ≈ €17.92 EUR
                        </span>
                    </span>
                </div>
                <div className={s.meta}>
                    <span className={s.meta__label}>ID</span>
                    <button type='button' className={s.meta__copy}>
                        <span className={s.meta__text}>TYNY694Y</span>
                        <span className={s.meta__icon}>
                            <svg
                                width='18'
                                height='18'
                                viewBox='0 0 18 18'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M15 6.75H8.25C7.42157 6.75 6.75 7.42157 6.75 8.25V15C6.75 15.8284 7.42157 16.5 8.25 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V8.25C16.5 7.42157 15.8284 6.75 15 6.75Z'
                                    stroke='#6C6D6F'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M3.75 11.25H3C2.60218 11.25 2.22064 11.092 1.93934 10.8107C1.65804 10.5294 1.5 10.1478 1.5 9.75V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H9.75C10.1478 1.5 10.5294 1.65804 10.8107 1.93934C11.092 2.22064 11.25 2.60218 11.25 3V3.75'
                                    stroke='#6C6D6F'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div className='divider' />
            <div className={s.bottom}>
                <div className={s.statuses}>
                    <div className={s.status}>
                        <span className={s.status__label}>Status</span>
                        <span className={s.status__value}>
                            <span className={s.status__icon}>
                                <svg
                                    width='18'
                                    height='18'
                                    viewBox='0 0 18 18'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <g clipPath='url(#clip0_12_194)'>
                                        <circle cx='9' cy='9' r='9' fill='#2EB670' />
                                        <path
                                            d='M13.5 6.375L7.3125 12.5625L4.5 9.75'
                                            stroke='white'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_12_194'>
                                            <rect width='18' height='18' fill='white' />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <span className={cn(s.status__text, s.status__text_success)}>
                                Succeeded
                            </span>
                        </span>
                    </div>
                    <div className={s.status}>
                        <span className={s.status__label}>Supporter</span>
                        <span className={s.status__value}>
                            <span className={cn(s.status__text, s.status__text_link)}>
                                Charlotte Ann
                            </span>
                        </span>
                    </div>
                    <div className={s.status}>
                        <span className={s.status__label}>Campaign</span>
                        <span className={s.status__value}>
                            <span className={cn(s.status__text, s.status__text_link)}>
                                Heart walk
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
