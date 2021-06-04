import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent({fill, stroke}) {
  return (
    <Svg
      width={30}
      height={26}
      viewBox="0 0 30 26"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        clipRule="evenodd"
        d="M12.294 25v-8.47h5.647V25H25V13.706h4.235L15.118 1 1 13.706h4.235V25h7.06z"
        stroke={stroke}
      />
    </Svg>
  );
}

export default SvgComponent;
