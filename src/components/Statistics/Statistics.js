import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Stat } from './StatisticsStat.styled';


export const Statistics = ({ title, stats, state}) => {
    
    const statValue = stat => state[stat.toLowerCase()];
    const totalFB = ({ good, neutral, bad }) => (good + neutral + bad);
    const positiveFB = (state.good / totalFB(state) * 100).toFixed(0) + "%"

    return (
        <Box p={5} pt={0}>
            <h2>{title}</h2>
            { totalFB(state) === 0 ? <Notification message="There is no feedback"></Notification> 
                : <Box as="ul" mt={4} >
                    {stats.map(stat => (
                        <Stat key={stat} >{stat}: <b>{statValue(stat)}</b></Stat>
                    ))}
                    <Stat>Total: <b>{totalFB(state)}</b></Stat>
                    <Stat>Positive feedback: <b>{positiveFB}</b></Stat>
                </Box>
            }
        </Box>
    )
}

const Notification = ({ message }) => {
    return (
        <Box as="div" mt={4} fs="m">
            { message }
        </Box>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.string).isRequired,
    state: PropTypes.shape({
        good: PropTypes.number.isRequired, 
        neutral: PropTypes.number.isRequired, 
        bad: PropTypes.number.isRequired, 
    }).isRequired,
};