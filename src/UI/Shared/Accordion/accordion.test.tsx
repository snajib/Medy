import React from 'react';
import renderer from 'react-test-renderer';
import { Accordion } from './accordion';
import { View, Text } from 'react-native';
import { AccordionSection } from './accordion-section';

const mockSchema = ['1', '2', '3', '4', '5'];

it('should render the correct number of sections', () => {
  const accordion = renderer.create(<Accordion schema={mockSchema} />);
  expect(accordion.root.findAllByType(AccordionSection).length).toBe(5);
});

it('should render the correct number of components', () => {
  const accordion = renderer.create(<Accordion schema={mockSchema} />);
  expect(accordion.root.findAllByType(AccordionSection).length).toBe(5);
  expect(accordion.root.findAllByType(Text).length).toBe(10);
  expect(accordion.root.findAllByType(Text)[0].props.children).toEqual(
    mockSchema[0],
  );
  expect(accordion.root.findAllByType(Text)[1].props.children).toEqual(
    'accordion content',
  );
  expect(accordion.root.findAllByType(View).length).toBe(21);
});

it('should render with snapshot', () => {
  const accordion = renderer.create(<Accordion schema={mockSchema} />);
  expect(accordion.toJSON()).toMatchSnapshot();
});
