import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);




export default function CustomizedRatings() {
    return (
        <div>
            <Box component="fieldset" mb={2} borderColor="transparent">
                <StyledRating
                    name="customized-color"
                    defaultValue={0}
                    max={1}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 'ss' : ''}`}
                    precision={1}
                    icon={<FavoriteIcon fontSize="inherit" />}
                />
            </Box>
        </div>
    );
}