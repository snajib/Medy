import React from 'react';
import { Text, View } from 'react-native';
import { AccordionSection } from './accordion-section';
import { styles } from '../styles';
import uuid from 'uuid-js';

export interface IAccordionProps {
  schema: string[];
}

function accordionSectionClick(active?: boolean): boolean {
  return (active = !active);
}

export class Accordion extends React.Component<IAccordionProps> {
  public renderSections(list: string[]) {
    return list.map(section => {
      return (
        <AccordionSection
          active={false}
          onClick={accordionSectionClick}
          key={uuid.create().toString()}
          labelText={styles.accordionSectionLabel}
          title={section}
        >
          <Text>accordion content</Text>
        </AccordionSection>
      );
    });
  }

  render() {
    return (
      <View style={styles.topAccordionContainer}>
        {this.renderSections(this.props.schema)}
      </View>
    );
  }
}
