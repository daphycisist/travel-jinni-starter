import PropTypes from 'prop-types';

const CountdownTime = ({ time, timeUnit }) => {
    return (
        <div className="flex-1 mx-1 text-center">
            <h2 className="text-xl font-bold md:text-lg text-jini-yellow-100">{time}</h2>
            <p className="uppercase text-base-small">{timeUnit}</p>
        </div>
    );
};

export default CountdownTime;

CountdownTime.propTypes = {
    time: PropTypes.string,
    timeUnit: PropTypes.string
};
