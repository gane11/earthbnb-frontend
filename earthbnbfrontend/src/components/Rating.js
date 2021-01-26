// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Rating from '@material-ui/lab/Rating';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import Box from '@material-ui/core/Box';

// const StyledRating = withStyles({
//     // iconFilled: {
//     //     color: '#ff6d75',
//     // },
//     iconHover: {
//         color: '#ff3d47',
//     },
// })(Rating);




// export default function CustomizedRatings() {
//     return (
//         <div>
//             <Box mb={2} borderColor="transparent">
//                 <StyledRating
//                     // name="customized-color"
//                     defaultValue={0}
//                     max={1}
//                     // getLabelText={(value) => `${value} Heart${value !== 1 ? 'ss' : ''}`}
//                     precision={1}
//                     // icon={<FavoriteIcon fontSize="inherit" />}
//                 />
//             </Box>
//         </div>
//     );
// }


import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';


const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

export default function SimpleRating({homeId}) {
    const [value, setValue] = React.useState(2);

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Rating</Typography>
                <StyledRating
                    color="secondary"
                    name={`home-${homeId}`}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </Box>
        </div>
    );
}