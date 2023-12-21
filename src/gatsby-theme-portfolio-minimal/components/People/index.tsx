import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { useMediaQuery } from 'gatsby-theme-portfolio-minimal/src/hooks/useMediaQuery';
import { Icon } from 'gatsby-theme-portfolio-minimal/src/components/Icon';
import { ImageObject } from 'gatsby-theme-portfolio-minimal/src/types';
import * as classes from './style.module.css';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';

enum LinkType {
    External = 'external',
    Github = 'github',
}

enum ContactType {
    TEL = 'tel',
    Email = 'email',
    Office = 'office'
}

export interface People {
    affiliation?: string;
    name: string;
    description: string;
    image: ImageObject & { linkTo?: string };
    subjects?: string[];
    links?: {
        type: LinkType;
        url: string;
    }[];
    visible: boolean;
    contacts?: {
        type: ContactType;
        content: string[];
    }[];
    alumni?: boolean;
    degree?: string;
}

interface PeopleProps {
    data: People;
    index: number;
}

export function People(props: PeopleProps): React.ReactElement {
    const isDesktopBreakpoint = useMediaQuery('(min-width: 992px)');

    return (
        <Animation
            type="fadeUp"
            className={classes.People}
            style={{
                flexDirection: isDesktopBreakpoint && true ? 'row-reverse' : undefined,
            }}
        >
            <div className={classes.Details}>
                <span className={classes.Degree}>{props.data.degree}</span>
                <span className={classes.Affiliation}>{props.data.affiliation}</span>
                <h4 className={classes.Name}>{props.data.name}</h4>
                <p>{props.data.description}</p>
                <div className={classes.Subjects}>
                    {props.data.subjects &&
                        props.data.subjects.length !== 0 &&
                        props.data.subjects.map((subject, key) => {
                            return (
                                <span key={key}>
                                    <u>{subject}</u>
                                </span>
                            );
                        })}
                </div>
                <div className={classes.Contacts}>
                    {props.data.contacts &&
                        props.data.contacts.length !== 0 &&
                        props.data.contacts.map((contact, contactIdx) => {
                            if (contact.type === ContactType.TEL || contact.type === ContactType.Office) {
                                const contactType = contact.type === ContactType.TEL ? 'TEL' : 'Office';
                               return(
                                    <div className={classes.ContactItem}>                     
                                    {`${contactType}: `}{contact.content.map((item, itemIdx) => {
                                        if (itemIdx === 0) {
                                            return `${item}`;
                                        } else {
                                            if (itemIdx < contact.content.length - 1) {
                                                return `, ${item}`;
                                            } else if (itemIdx === contact.content.length - 1) {
                                                return ` and ${item}`;
                                            }
                                        }
                                    }
                                    )}
                                    </div>
                                 );
                            }
                            if (contact.type === ContactType.Email) {
                                return(
                                    <div className={classes.ContactItem}>                     
                                    {`Email: `}{contact.content.map((mail, mailIdx) => {
                                        if (mailIdx === 0) {
                                            return <a href={`mailto:${mail}`}>{mail}</a>;
                                        } else {
                                            if (mailIdx < contact.content.length - 1) {
                                                return <>, <a href={`mailto:${mail}`}>{mail}</a></>;
                                            } else if (mailIdx === contact.content.length - 1) {
                                                return <> and <a href={`mailto:${mail}`}>{mail}</a></>;
                                            }
                                        }
                                    }
                                    )}
                                    </div>
                                 );
                            }
                        })}
                </div>
                <div className={classes.Links}>
                    {props.data.links &&
                        props.data.links.length !== 0 &&
                        props.data.links.map((link, key) => {
                            return (
                                <a
                                    key={key}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="External Link"
                                >
                                    <Icon name={link.type} color="var(--subtext-color)" />
                                </a>
                            );
                        })}
                </div>
            </div>
            {props.data.image.src && props.data.image.linkTo && (
                <a href={props.data.image.linkTo} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <GatsbyImage
                        className={classes.PeopleImageWrapper}
                        imgClassName={classes.PeopleImage}
                        image={props.data.image.src.childImageSharp.gatsbyImageData}
                        alt={props.data.image.alt || `People ${props.data.name}`}
                    />
                </a>
            )}
            {props.data.image.src && !props.data.image.linkTo && (
                <GatsbyImage
                    className={classes.PeopleImageWrapper}
                    imgClassName={classes.PeopleImage}
                    image={props.data.image.src.childImageSharp.gatsbyImageData}
                    alt={props.data.image.alt || `People ${props.data.name}`}
                />
            )}
            <div id={(props.data.affiliation + props.data.name)} className={classes.Anchor}></div>
        </Animation>
    );
}
