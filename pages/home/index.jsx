import Head from 'next/head';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';

const Homepage = () => {
    const targetDate = '04/23/2022 23:59:59';

    return (
        <div className="flex flex-col min-h-screen text-white bg-no-repeat bg-cover bg-hero bg-hero-mask bg-blend-overlay">
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
