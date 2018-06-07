/**
 * bootstrap
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ExampleView } from './ExampleView';

function main(rootElement: HTMLElement): void {
  ReactDOM.render(<ExampleView />, rootElement);
}

const root: HTMLElement | null = document.getElementById('root');
if (root) {
  main(root);
}
