import React from 'react';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
// import { Slider } from 'gatsby-theme-portfolio-minimal/src/components/Slider';
import { Button, ButtonType } from 'gatsby-theme-portfolio-minimal/src/components/Button';
// import { People } from '../../gatsby-theme-portfolio-minimal/components/People';
import { PageSection } from 'gatsby-theme-portfolio-minimal/src/types';
import { useLocalDataSource } from './data';
import * as classes from './style.module.css';
var seedrandom = require('seedrandom');

export function SubjectsSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allPeopleJson.sections[0];
    var dup_subjects = [];
    data.people.map((people, key) => {
        people.subjects.map((subject, key) => {
            dup_subjects.push(subject);
        });
    });
    var subjects = [...new Set(dup_subjects)];

    const today = new Date();
    const today_seed = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
    seedrandom(today_seed, { global: true });
    subjects.sort(() => Math.random() - 0.5);
    // subjects.sort();
    const shouldShowButton = data.subjects.visible !== false;
    const initiallyShownSubjects = data.subjects.length || 3;
    const [shownSubjects, setShownSubjects] = React.useState<number>(
        shouldShowButton ? initiallyShownSubjects : subjects.length,
    );

    function loadMoreHandler() {
        setShownSubjects(subjects.length);
    }

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading}>
                <div className={classes.SubjectHeader}>
                    서울대학교 베이즈통계 연구실에서는 베이즈 통계학과 관련된 모든 주제를 연구합니다.
                </div>
                <div className={classes.Subjects}>
                    {subjects.slice(0, shownSubjects).map((subject, key) => {
                        return (
                            <Animation key={key} className={classes.Subject} type="scaleIn" delay={key * 100}>
                                {' '}
                                {subject}
                            </Animation>
                        );
                    })}
                    {shouldShowButton && shownSubjects < subjects.length && (
                        <Animation type="scaleIn" delay={(shownSubjects + 1) * 100}>
                            <Button
                                type={ButtonType.BUTTON}
                                onClickHandler={loadMoreHandler}
                                label={data.subjects.label || '더보기'}
                            />
                        </Animation>
                    )}
                </div>
            </Section>
        </Animation>
    );
}
