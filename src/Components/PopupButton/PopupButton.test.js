import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { PopupButton } from './PopupButton';
import { Popup } from '../Popup/Popup'
import DATA from "../../Utils/data.json"
import { displayQuestionAnswer } from '../../Utils/displayQuestionAnswer';

test('renders without crashing', () => {
  render(<PopupButton />);
});

test('renders given text', () => {
  render(<PopupButton btnText="TEST" color="secondary" />);
  expect(screen.getByRole('button')).toHaveTextContent('TEST')
});

test('renders without text', () => {
  render(<PopupButton color="secondary"/>);
  expect(screen.getByRole('button')).toHaveTextContent('Click Me')
});

test('toggle event on click', () => {
  render(<PopupButton btnText="TEST" color="secondary" popup={ <Popup content={DATA} renderer={displayQuestionAnswer} /> }/>);
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getAllByText('Yes').length).toBe(3);
  expect(screen.getAllByText('No').length).toBe(1);
});
