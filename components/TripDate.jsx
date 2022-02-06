import PropTypes from 'prop-types';

const TripDate = ({ active, date, handleActive }) => {
    return (
        <span
            role="none"
            onKeyDown={handleActive}
            onClick={handleActive}
            className={`flex items-center justify-center text-xs cursor-pointer ${
                active
                    ? 'font-mono text-sm font-bold h-8 w-8 md:w-8 text-yellow-300 bg-black bg-opacity-50 border-2 border-yellow-300 rounded-full gap-1'
                    : 'w-10 h-10 '
            }`}>
            {date}
        </span>
    );
};

export default TripDate;

TripDate.propTypes = {
    active: PropTypes.bool,
    date: PropTypes.string,
    handleActive: PropTypes.func
};
