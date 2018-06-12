/**
 * Example view
 */
import * as React from 'react';

import * as TileListView from 'tile-list-view';
import { ExampleViewItem } from './ExampleViewItem';

const isMac: boolean = window.navigator.userAgent.indexOf('Mac OS X') >= 0;

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
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  public handleUpdateSelection(selection: number[]): void {
    this.setState({ selection });
  }

  public handleUpdateCursor(cursor: number): void {
    this.setState({ cursor });
  }

  public handleKeyDown(event: KeyboardEvent): void {
    switch (`${event.key}`.toLowerCase()) {
      case 'delete':
      case 'backspace':
        this.setState({
          itemSources: this.state.itemSources.filter(
            // tslint:disable-next-line:variable-name
            (_item: string, index: number) => {
              return !this.state.selection.includes(index);
            },
          ),
          selection: [],
        });
        break;
      case 'a':
        if ((isMac && event.metaKey) || (!isMac && event.ctrlKey)) {
          this.setState({
            selection: this.state.itemSources.map(
              // tslint:disable-next-line:variable-name
              (_item: string, index: number) => {
                return index;
              },
            ),
          });
          break;
        }
        return;
      default:
        return;
    }
    event.preventDefault();
    event.stopPropagation();
  }

  public render(): React.ReactNode {
    const { itemSources, selection, cursor } = this.state;
    const c = itemSources.length <= cursor ? itemSources.length - 1 : cursor;

    const items: React.ReactNode[] = itemSources.map(
      (item: string, index: number) => (
        <ExampleViewItem
          content={item}
          selected={selection.includes(index)}
          cursor={c === index}
        />
      ),
    );

    return (
      <TileListView
        items={items}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        selection={selection}
        cursor={c}
        style={style}
        focusedStyle={focusedStyle}
        onUpdateSelection={this.handleUpdateSelection}
        onUpdateCursor={this.handleUpdateCursor}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}
