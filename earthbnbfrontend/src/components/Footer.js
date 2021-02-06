// import React from 'react';
import './Footer.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

// const Footer =() =>{

//   return (
//     <div className='footer'>
//       <p>Â© 2020 Airbnb clone! No rights reserved - this is a demo!</p>
//         <a href="https://www.linkedin.com/in/aleksandar-dordevic-418a39b5/">
//            <LinkedInIcon />
//         </a>
//         <a href="https://github.com/gane11">
//           <GitHubIcon />
//         </a>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import Box from '@material-ui/core/Box';

export default function Footer() {
  return (
    // <div className='footer'>
      <div className='footer'style={{ width: '100%' }}>
      <Box display="flex" p={1} bgcolor="background.paper">
        <Box p={1} width="100%" bgcolor="grey.50">
          <a className="link"href="https://gane11.github.io/Aleksandar-Dordevic/">
          <p className="my-name">Created by Aleksandar Dordevic</p>

          </a>
        </Box>
        <Box p={1} flexShrink={1} bgcolor="grey.50">
          <a href="https://www.linkedin.com/in/aleksandar-dordevic-418a39b5/">
            <LinkedInIcon color="secondary" style={{ fontSize: 65 }}/>
          </a>
        </Box>
        <Box p={1} flexShrink={0} bgcolor="grey.50">
          <a href="https://github.com/gane11">
            <GitHubIcon color="secondary" style={{ fontSize: 60 }} />
           </a>
        </Box>
      </Box>
    </div>
    // </div>
  );
}

// export default Footer