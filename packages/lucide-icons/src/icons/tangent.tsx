import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <_Circle cx="17" cy="4" r="2" stroke={color} />
      <Path d="M15.59 5.41 5.41 15.59" stroke={color} />
      <_Circle cx="4" cy="17" r="2" stroke={color} />
      <Path d="M12 22s-4-9-1.5-11.5S22 12 22 12" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'Tangent'

export const Tangent = memo<IconProps>(themed(Icon))
