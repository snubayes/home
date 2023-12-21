import React from 'react';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import { getSectionBySectionId, useLocalDataSource } from './data';

export function PublicationsSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = getSectionBySectionId(response, props.sectionId);

    return (
        <Section anchor={props.sectionId} heading={props.heading}>
            <div dangerouslySetInnerHTML={{ __html: data.html }} />
        </Section>
    );
}
