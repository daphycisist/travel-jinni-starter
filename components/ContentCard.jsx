import PropTypes from 'prop-types';
import React from 'react';

const ContentCard = ({ header, content, buttonText }) => {
    return (
        <div
            className={`w-full px-4 pt-8 text-center bg-gray-400 border border-white rounded-md bg-opacity-10 blur-filter md:pt-12`}>
            <h1 className="pb-5 font-serif text-2xl font-bold xsm:text-3xl md:text-5xl lg:max-w-md lg:mx-auto lg:leading-snug lg:text-6xl">
                {header}
            </h1>

            <p className="pb-5 text-xs font-light text-center xsm:text-base md:text-xl lg:w-5/6 lg:mx-auto">
                {content}
            </p>
            <button className="w-full py-2 mb-5 text-sm font-bold text-black bg-yellow-300 border-4 border-black md:text-lg xsm:text-base lg:text-2xl">
                {buttonText}
            </button>
        </div>
    );
};

ContentCard.propTypes = {
    header: PropTypes.string,
    content: PropTypes.string,
    buttonText: PropTypes.string
};

export default ContentCard;
