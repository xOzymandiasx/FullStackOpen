import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Togglable from './Togglable';

describe("<Togglable />", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Togglable buttonLabel="new note">
        <div className='testDiv'/>
      </Togglable>
    );
  });

  test("render its children", () => {
    expect(component.container.querySelector('.testDiv')).toBeDefined();
  });
});