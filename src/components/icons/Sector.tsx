import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as SectorIcon } from './images/sector.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={SectorIcon} viewBox="0 0 150 58" {...props} />;
}
