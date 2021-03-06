import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent({background, ...props}) {
  return (
    <Svg
      width={14}
      height={18}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11 14.01V7H9v7.01H6L10 18l4-3.99h-3zM4 0L0 3.99h3V11h2V3.99h3L4 0z"
        fill={background}
      />
    </Svg>
  );
}

export default SvgComponent;
