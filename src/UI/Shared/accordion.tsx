import React from "react";
import { Text, View } from "react-native";
import { AccordionSection } from "./accordion-section";
import { styles } from "./styles";

export interface IAccordianProps {
    schema: string[]
}

function accordianSectionClick(active?: boolean): boolean {
    return active = !active;
}

export class Accordion extends React.Component<IAccordianProps> {

    public renderSections(list: string[]) {
        return list.map(section => {
            return (
                <AccordionSection
                    active={false}
                    onClick={accordianSectionClick}
                    labelText={styles.accordionSectionLabel}
                    title={section}>
                    <Text>accordion content</Text>
                </AccordionSection>
            )
        })
    }

    render() {
        return (
            <View style={styles.topAccordionContainer}>
                {this.renderSections(this.props.schema)}
            </View>
        )
    }
}