import React from 'react';
import { render, screen } from '@testing-library/react';
import { Popup } from './Popup'
// Note: I use the same file from the main project since it's all mockup data.
//       I would separate data if it was not the case.
import DATA from '../../Utils/data.json'
import {displayQuestionAnswer} from '../../Utils/displayQuestionAnswer'

test('renders without crashing', () => {
  render(<Popup content={DATA} renderer={displayQuestionAnswer}/>);
});

test('renders given data', () => {
  render(<Popup content={DATA} renderer={displayQuestionAnswer}/>);
  expect(screen.getAllByText('Yes').length).toBe(3)
  expect(screen.getAllByText('No').length).toBe(1)
});
