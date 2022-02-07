import Head from 'next/head';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Homepage = () => {
    const targetDate = '04/23/2022 23:59:59';

    return (
        <div className="relative flex flex-col min-h-screen text-white bg-no-repeat bg-cover lg:h-full bg-hero bg-hero-mask bg-blend-overlay">
            <div className="h-full">
                <Head>
                    <title>Travel Jinni</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>
            <Navbar targetDate={targetDate} />
            <Hero targetDate={targetDate} />
        </div>
    );
};

export default Homepage;
