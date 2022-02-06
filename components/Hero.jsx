import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';
import TripDate from './TripDate';

const Hero = ({ targetDate }) => {
    const endDay = new Date(targetDate);
    const month = endDay.toLocaleString('default', { month: 'short' });
    const day = `${endDay.getDay()}`;
    console.log({ day });

    const [active, setActive] = useState(day);

    const handleActive = (e) => {
        const { textContent } = e.target;
        console.log(e.target);
        setActive(textContent);
    };

    return (
        <section className="px-6 py-4 border-t border-gray-500 md:px-14">
            <div className="">
                <h1 className="py-1 font-serif text-base font-bold md:text-xl">
                    Six Days In Dubai
                </h1>

                <div className="">
                    <p className="flex items-center justify-center w-8 h-8 text-sm font-medium uppercase">
                        {month}
                    </p>
                    <div className="flex items-center">
                        {Array(6)
                            .fill(null)
                            .map((_, index) => {
                                const currentDate = `${+day + index}`;

                                return (
                                    <TripDate
                                        key={Math.random()}
                                        active={active === currentDate}
                                        date={currentDate}
                                        handleActive={handleActive}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center h-full my-6">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-12 h-12 p-2 pl-3 overflow-hidden bg-white rounded-full">
                            <Image
                                src="/logo.png"
                                alt="Travel Jinni logo"
                                objectFit="cover"
                                className="object-cover"
                                width="90%"
                                height="90%"
                            />
                        </div>
                        <div className="text-center border border-white">
                            <h1 className="px-3 font-mono text-2xl font-bold tracking-wide whitespace-nowrap">
                                HILTON HOTEL
                            </h1>
                            <h2 className="items-center w-full text-xs text-center text-black bg-white">
                                POWERED BY TRAVEL JINNI
                            </h2>
                        </div>
                    </div>

                    <div className="w-full px-4 pt-8 text-center bg-gray-400 border border-white rounded-md bg-opacity-10 blur-filter">
                        <h1 className="pb-5 font-serif text-3xl font-bold">
                            Your Trip Awaits You!
                        </h1>
                        <p className="pb-5 text-sm">
                            We have taken some time to help plan your trip to make it a memmorable
                            one. Access your calender for even more things you can do on your trip.
                        </p>
                        <button className="w-full py-2 mb-5 font-bold text-black bg-yellow-300 border-2 border-black">
                            ACCESS CALENDAR
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    targetDate: PropTypes.string
};

export default Hero;
