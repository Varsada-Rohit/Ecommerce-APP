import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent({color, ...otherPerameters}) {
  return (
    <Svg
      width={16}
      height={8}
      viewBox="0 0 16 8"
      fill="none"
      {...otherPerameters}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.01 3H1c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71L12.86.85c-.31-.32-.85-.09-.85.35V3z"
        fill={color ? color : '#DB3022'}
      />
    </Svg>
  );
}

export default SvgComponent;
