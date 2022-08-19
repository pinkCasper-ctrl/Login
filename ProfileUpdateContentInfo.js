import Svg, {Path} from 'react-native-svg';

import React from 'react';

const ProfileUpdateContentInfo = ({width, height, style}) => {
  return (
    // <Svg
    //   style={style}
    //   width={width}
    //   height={height}
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg">
    //   <Path
    //     d="M16.5 9.13608C14.682 9.7421 12.2579 7.31804 12.8639 5.5M13.6109 4.75306L9.69403 8.66988C7.99123 10.3727 6.78322 12.5063 6.19917 14.8425L6.00991 15.5995C5.95094 15.8354 6.1646 16.0491 6.40049 15.9901L7.15752 15.8008C9.49375 15.2168 11.6273 14.0088 13.3301 12.306L17.2469 8.38914C17.7291 7.90697 18 7.253 18 6.5711C18 5.15112 16.8489 4 15.4289 4C14.747 4 14.093 4.27088 13.6109 4.75306Z"
    //     stroke="#363853"
    //     strokeWidth={1.5}
    //   />
    //   <Path
    //     d="M19 20H5"
    //     stroke="#363853"
    //     strokeWidth={1.5}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </Svg>

    <Svg
          style={style} 
          width={width}
          height={height} 
          viewBox="0 0 20 18" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
      <Path 
          d="M14.8288 6.3125L10.9188 9.46058C10.1789 10.0407 9.14163 10.0407 8.40168 9.46058L4.45813 6.3125" 
          stroke="#656F77" 
          strokeWidth={1.5} 
          // strokeLinecap={"round" }
          // strokeLineJoin={"round"}
          />
      <Path 
          // fill-rule="evenodd" 
          // clip-rule="evenodd" 
          d="M5.31392 1.21094H13.9562C15.2023 1.22491 16.3883 1.7517 17.238 2.66862C18.0878 3.58554 18.527 4.81255 18.4535 6.06388V12.0478C18.527 13.2991 18.0878 14.5261 17.238 15.443C16.3883 16.3599 15.2023 16.8867 13.9562 16.9007H5.31392C2.63734 16.9007 0.833374 14.7232 0.833374 12.0478V6.06388C0.833374 3.38843 2.63734 1.21094 5.31392 1.21094Z" 
          stroke="#656F77" 
          strokeWidth={1.5}
          strokeLinecap={"round" }
          strokeLinejoin={"round"}
          
        />
    </Svg>
  );
};
//propTypes


//defaultProps
ProfileUpdateContentInfo.defaultProps = {
  width: 24,
  height: 24,
};
export default ProfileUpdateContentInfo;
