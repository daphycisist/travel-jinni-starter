import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ContentCard from './ContentCard';
import TripDate from './TripDate';

const Hero = ({ targetDate }) => {
    const endDay = new Date(targetDate);
    const month = endDay.toLocaleString('default', { month: 'short' });
    const day = `${endDay.getDay()}`;

    const [active, setActive] = useState(day);

    const handleActive = (e) => {
        const { textContent } = e.target;
        setActive(textContent);
    };

    return (
        <section className="flex flex-col flex-1 h-full px-6 py-4 border-t border-gray-500 md:px-14 lg:block lg:w-full lg:px-24 lg:py-8">
            <div>
                <h1 className="py-1 font-serif text-xl font-bold xsm:text-2.5xl md:text-3xl lg:pb-5">
                    Six Days In Dubai
                </h1>

                <div className="">
                    <p className="flex items-center justify-center w-8 h-8 pl-4 text-sm font-medium uppercase xsm:text-base md:text-xl md:mb-3">
                        {month}
                    </p>
                    <div className="flex items-center lg:flex-col md:items-start lg:gap-4">
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

            <div className="items-center justify-center flex-1 w-full h-full lg:absolute lg:top-0 lg:left-0 lg:flex">
                <div className="flex items-center justify-center flex-1 w-full max-w-xs py-12 md:w-4/6 md:mx-auto lg:p-0 lg:mx-0">
                    <div className="flex flex-col gap-4 xsm:gap-16">
                        <div className="flex items-center w-full gap-2 lg:gap-6">
                            <div className="flex items-center justify-center w-12 p-2 pl-3 overflow-hidden bg-white rounded-full xsm:w-16 md:w-20 lg:w-32 lg:h-32">
                                <Image
                                    src="/logo.png"
                                    alt="Travel Jinni logo"
                                    objectFit="cover"
                                    className="object-cover"
                                    width="90%"
                                    height="90%"
                                />
                            </div>
                            <div className="flex-1 text-center border border-white">
                                <h1 className="px-4 py-4 font-mono text-2xl font-bold tracking-wide xsm:text-3xl whitespace-nowrap md:text-5xl lg:text-6xl">
                                    HILTON HOTEL
                                </h1>
                                <h2 className="items-center w-full text-xs font-semibold text-center text-black bg-white xsm:text-sm md:text-base lg:text-2xl lg:font-normal">
                                    POWERED BY TRAVEL JINNI
                                </h2>
                            </div>
                        </div>

                        <ContentCard
                            header={`Your Trip Awaits You!`}
                            content="We have taken some time to help plan your trip to make it a memmorable
                            one. Access your calender for even more things you can do on your trip."
                            buttonText="ACCESS CALENDAR"
                        />
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
