import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { SocialProfiles } from 'gatsby-theme-portfolio-minimal/src/components/SocialProfiles';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import { useLocalDataSource } from './data';
import * as classes from './style.module.css';

export function ContactSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allContactJson.sections[0];
    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading} additionalClasses={[classes.Contact]}>
                {data.description && <p className={classes.Description}>{data.description}</p>}
                <div className={classes.Profile}>
                    {data.image.src && (
                        <GatsbyImage
                            className={classes.Avatar}
                            image={data.image.src.childImageSharp.gatsbyImageData}
                            alt={data.image.alt || `Profile ${data.name}`}
                        />
                    )}
                    <div className={classes.ContactDetails}>
                        <div className={classes.Name}>{data.name}</div>
                        <div className={classes.ContactInfo}>
                            <div className={classes.ContactInfoItem}>{data.address}</div>
                            <div className={classes.ContactInfoItem}>{`TEL: ${data.telephone}`}</div>
                            <div className={classes.ContactInfoItem}>
                                <u>
                                <a href={`mailto:${data.email}`}>{data.email}</a>
                                </u>
                            </div>
                        </div>
                    </div>
                </div>
                {data.socialProfiles && (
                    <SocialProfiles from={data.socialProfiles.from} showIcon={data.socialProfiles.showIcons} />
                )}
            </Section>
        </Animation>
    );
}
