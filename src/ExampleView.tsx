/**
 * Example view
 */
import * as React from 'react';

import * as TileListView from 'tile-list-view';
import { ExampleViewItem } from './ExampleViewItem';

const itemWidth: number = 160;
const itemHeight: number = 120;

const style: React.CSSProperties = {
  width: '80%',
  height: Math.ceil(itemHeight * 3.3),
  margin: '1em auto',
  background: '#fff',
};

const focusedStyle: React.CSSProperties = {
  outline: '1px dotted black',
};

// tslint:disable-next-line:no-empty-interface
interface Props {}

interface State {
  itemSources: string[];
  selection: number[];
  cursor: number;
}

export class ExampleView extends React.Component<Props, State> {
  public state: State = {
    itemSources: Array(200)
      .fill('Item')
      .map((x: string, i: number) => `${x} ${i}`),
    selection: [1, 3, 5],
    cursor: 0,
  };

  constructor(props: Props) {
    super(props);

    this.handleUpdateSelection = this.handleUpdateSelection.bind(this);
    this.handleUpdateCursor = this.handleUpdateCursor.bind(this);
  }

  public handleUpdateSelection(selection: number[]): void {
    this.setState({ selection });
  }

  public handleUpdateCursor(cursor: number): void {
    this.setState({ cursor });
  }

  public render(): React.ReactNode {
    const { itemSources, selection, cursor } = this.state;

    const items: React.ReactNode[] = itemSources.map(
      (item: string, index: number) => (
        <ExampleViewItem
          content={item}
          selected={selection.includes(index)}
          cursor={cursor === index}
        />
      ),
    );

    return (
      <TileListView
        items={items}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        selection={selection}
        style={style}
        focusedStyle={focusedStyle}
        onUpdateSelection={this.handleUpdateSelection}
        onUpdateCursor={this.handleUpdateCursor}
      />
    );
  }
}
