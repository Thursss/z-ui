import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

test('should rendered successfully', () => {
  const button = render(<Button>Base Button</Button>);
  const element = button.queryByText('Base Button');
  expect(element).toBeTruthy();
});

describe('test button component', () => {

})