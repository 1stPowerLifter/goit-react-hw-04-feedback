import { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Button } from './FeedbackBtn.styled';


export class Feedback extends Component {

    render() { 
        const { title, btnNames, addFeedback} = this.props

        return(
            <Box p={5}>
                <h2>{title}</h2>
                <Box display="flex" gridGap={4} mt={4}>
                    {btnNames.map( name => (
                        <Button type='button' key={name}
                            onClick={() => addFeedback(name.toLowerCase())}>{name}</Button>
                    ))}
                </Box>
            </Box>
        )
    }
}


Feedback.propTypes = {
    title: PropTypes.string.isRequired,
    btnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    addFeedback: PropTypes.func.isRequired
};