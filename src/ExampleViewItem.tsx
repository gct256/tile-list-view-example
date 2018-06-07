/**
 * Example view item
 */
import * as React from 'react';

const baseStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  transitionProperty: 'background, box-shadow',
  transitionDuration: '0.1s',
  transitionTimingFunction: 'ease',
};

const selectedStyle: React.CSSProperties = {
  backgroundColor: '#9cf',
};

const cursorStyle: React.CSSProperties = {
  boxShadow: 'inset 0 0 0 1px #69c',
};

interface Props {
  content: string;
  selected: boolean;
  cursor: boolean;
}

export const ExampleViewItem: React.SFC<Props> = (
  props: Props,
): React.ReactElement<Props> => {
  const { content, selected, cursor } = props;
  const style: React.CSSProperties = {
    ...(selected ? selectedStyle : {}),
    ...(cursor ? cursorStyle : {}),
    ...baseStyle,
  };

  return <div style={style}>{content}</div>;
};
