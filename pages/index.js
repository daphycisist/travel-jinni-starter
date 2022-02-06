import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Travel Jinni</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex justify-between w-11/12 pt-2 pb-1 m-auto">
                <div>
                    <p className="text-sm">Remaining Days to my Trip</p>

                    <div className="flex">
                        <div className="flex-col w-10 mx-1 text-center">
                            <h2 className={styles.pFlexT}>10</h2>
                            <p className={styles.txtSpan}>Weeks</p>
                        </div>
                        <div className="flex-col w-10 mx-1 text-center">
                            <h2 className={styles.pFlexT}>06</h2>
                            <p className={styles.txtSpan}>Days</p>
                        </div>
                        <div className="flex-col w-10 mx-1 text-center">
                            <h2 className={styles.pFlexT}>45</h2>
                            <p className={styles.txtSpan}>Hours</p>
                        </div>
                        <div className="flex-col w-10 mx-1 text-center">
                            <h2 className={styles.pFlexT}>25</h2>
                            <p className={styles.txtSpan}>Minutes</p>
                        </div>
                        <div className="flex-col w-10 mx-1 text-center">
                            <h2 className={styles.pFlexT}>06</h2>
                            <p className={styles.txtSpan}>Seconds</p>
                        </div>
                    </div>
                </div>
                <div className="flex py-5 text-sm">
                    <p className="px-2">My Trips</p>
                    <div className="flex">
                        <p className="px-2">|</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                        </svg>
                        <span>EN (S)</span>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-500"></div>
            <div className="flex py-4 px-14">
                <div className="w-60">
                    <h1 className="py-1 font-serif text-xl font-bold">Six Days In Dubai</h1>
                    <ul>
                        <li className="flex items-center justify-center w-8 h-8">FEB</li>
                        <li className="flex items-center justify-center w-8 h-8 font-mono text-sm font-bold text-yellow-300 bg-black bg-opacity-50 border-2 border-yellow-300 rounded-full">
                            15
                        </li>
                        <li className="flex items-center justify-center w-8 h-10 text-xs">16</li>
                        <li className="flex items-center justify-center w-8 h-10 text-xs">17</li>
                        <li className="flex items-center justify-center w-8 h-10 text-xs">18</li>
                        <li className="flex items-center justify-center w-8 h-10 text-xs">19</li>
                        <li className="flex items-center justify-center w-8 h-10 text-xs">20</li>
                    </ul>
                </div>
                <div>
                    <div className="flex pt-16 pl-40">
                        <div className="flex items-center justify-center w-20 h-20 p-2 bg-white rounded-full">
                            <img src="/logo.png" className="rounded-full w-18 h-18" />
                        </div>
                        <div className="ml-4 text-center border border-white">
                            <h1 className="px-3 font-mono font-bold tracking-wide head-t">
                                HILTON HOTEL
                            </h1>
                            <h2 className="pb-1 text-xl text-black bg-white">
                                POWERED BY TRAVEL JINNI
                            </h2>
                        </div>
                    </div>
                    <div className="px-4 pt-8 mt-2 ml-40 text-center bg-gray-400 border border-white rounded-md div-w bg-opacity-10 blur-filter">
                        <h1 className="px-4 pb-5 font-serif text-5xl font-bold">
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
        </div>
    );
}
