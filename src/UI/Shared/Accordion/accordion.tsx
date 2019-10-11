import React from "react";
import { Text, View } from "react-native";
import { AccordionSection } from "./accordion-section";
import { styles } from "../styles";

interface Props {
    schema: string[]
}

export class Accordion extends React.Component<Props> {

    public renderSections(list: string[]) {
        return list.map(section => {
            return (
                <AccordionSection
                    labelText={styles.accordionSectionLabel}
                    title={section}>
                    <Text>abc</Text>
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

/*
            <View style={styles.topAccordionContainer}>
                <AccordionSection
                    labelText={styles.accordionSectionLabel}
                    title="Pictures">
                    <Text>Pics</Text>
                </AccordionSection>
                <AccordionSection
                    labelText={styles.accordionSectionLabel}
                    title="About">
                    <Text>About</Text>
                </AccordionSection>
                <AccordionSection
                    labelText={styles.accordionSectionLabel}
                    title="Technologies">
                    <Text>Tech</Text>
                </AccordionSection>
            </View>


           public renderSections(list: string[]) {
            return list.map(section => {
                <AccordionSection
                    labelText={styles.accordionSectionLabel}
                    title={section}>
                    <Text>abc</Text>
                </AccordionSection>
            })
        }

        render() {
            return (
                <View style={styles.topAccordionContainer}>
                    {this.renderSections(this.props.schema)}
                </View>
            )
        }

        */