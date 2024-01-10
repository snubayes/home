import React from 'react';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { Slider } from 'gatsby-theme-portfolio-minimal/src/components/Slider';
import { Button, ButtonType } from 'gatsby-theme-portfolio-minimal/src/components/Button';
import { People } from '../../components/People';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import { useLocalDataSource } from './data';
import * as classes from './style.module.css';

export function PeopleSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allPeopleJson.sections[0];

    const shouldShowButton = data.button !== undefined && data.button.visible !== false;
    const [shownAlumni, setShownAlumni] = React.useState<boolean>(
        // always show alumni!
        // shouldShowButton ? false : true
        true
    );

    function loadAlumniHandler() {
        setShownAlumni(true);
    }

    return (
        <Animation type="fadeIn">
            <Section anchor={props.sectionId} heading={props.heading}>
                <Slider additionalClasses={[classes.People]}>
                    {data.people.map((people, key) => {
                        return people.visible && !people.alumni ? <People key={key} index={key} data={people} /> : null;
                    })}
                </Slider>
                {shouldShowButton && (
                        <Animation type="fadeIn" className={classes.MorePeople} >
                            <Button
                                type={ButtonType.BUTTON}
                                onClickHandler={loadAlumniHandler}
                                label={data.button.label || "Load More"}
                                id="alumni-button"
                            />
                        </Animation>
                )}
                <Slider additionalClasses={[classes.People]}>
                    {data.people.map((people, key) => {
                        return people.visible && people.alumni && shownAlumni ? <People key={key} index={key} data={people} /> : null;
                    })}
                </Slider>
            </Section>
        </Animation>
    );
}
