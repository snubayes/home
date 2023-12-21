import { graphql, useStaticQuery } from 'gatsby';

interface SubjectsSectionQueryResult {
    allPeopleJson: {
        sections: {
            subjects: {
                label: string;
                length: number;
                visible: boolean;
            };
            people: {
                subjects: string[];
                name: string;
                visible: boolean;
            }[];
        }[];
    };
}

export const useLocalDataSource = (): SubjectsSectionQueryResult => {
    return useStaticQuery(graphql`
        query SubjectsSectionQuery {
            allPeopleJson {
                sections: nodes {
                    subjects {
                        label
                        length
                        visible
                    }
                    people {
                        subjects
                        name
                        visible
                    }
                }
            }
        }
    `);
};
