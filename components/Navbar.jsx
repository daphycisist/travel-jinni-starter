import Image from 'next/image';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CountdownTime from './CountdownTime';

const Navbar = ({ targetDate }) => {
    const [timer, setTimer] = useState({
        weeks: '--',
        days: '--',
        hours: '--',
        minutes: '--',
        seconds: '--'
    });

    useEffect(() => {
        const endDate = new Date(targetDate).getTime();

        const interval = setInterval(() => {
            const currentDate = new Date().getTime();
            const countdownDifference = endDate - currentDate;

            const weeks = Math.floor(
                countdownDifference / (1000 * 60 * 60 * 24 * 7)
            ).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

            const days = Math.floor(
                (countdownDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
            ).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

            const hours = Math.floor(
                (countdownDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

            const minutes = Math.floor(
                (countdownDifference % (1000 * 60 * 60)) / (1000 * 60)
            ).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

            const seconds = Math.floor((countdownDifference % (1000 * 60)) / 1000).toLocaleString(
                'en-US',
                { minimumIntegerDigits: 2, useGrouping: false }
            );

            setTimer({ weeks, days, hours, minutes, seconds });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <nav className="flex flex-col-reverse justify-between gap-4 px-1 py-2 xsm:px-5 md:flex-row md:w-11/12 md:mx-auto lg:pt-4 lg:w-full lg:pl-20 lg:pr-12">
            <div className="md:m-0">
                <p className="text-sm">Remaining Days to my Trip</p>
                <div className="flex md:gap-3 ">
                    <CountdownTime time={timer.weeks} timeUnit="Weeks" />
                    <CountdownTime time={timer.days} timeUnit="Days" />
                    <CountdownTime time={timer.hours} timeUnit="Hours" />
                    <CountdownTime time={timer.minutes} timeUnit="Minutes" />
                    <CountdownTime time={timer.seconds} timeUnit="Seconds" />
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 text-xs xsm:text-sm md:gap-4 md:text-base">
                <span>My Trips</span>
                <span>|</span>
                <div className="flex items-center gap-1">
                    <span className="w-5 h-5">
                        <Image
                            src="/languageIcon.svg"
                            alt="language icon"
                            objectFit="cover"
                            className="object-cover"
                            width="100%"
                            height="100%"
                        />
                    </span>
                    <span>EN (S)</span>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    targetDate: PropTypes.string
};

export default Navbar;
