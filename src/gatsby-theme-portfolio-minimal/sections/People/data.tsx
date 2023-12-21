import { graphql, useStaticQuery } from 'gatsby';
import { People } from '../../components/People';

interface PeopleSectionQueryResult {
    allPeopleJson: {
        sections: {
            button: {
                label: string;
                url: string;
                visible: boolean;
            };
            people: People[];
        }[];
    };
}

export const useLocalDataSource = (): PeopleSectionQueryResult => {
    return useStaticQuery(graphql`
        query PeopleSectionQuery {
            allPeopleJson {
                sections: nodes {
                    button {
                        label
                        url
                        visible
                    }
                    people {
                        affiliation
                        alumni
                        description
                        image {
                            alt
                            linkTo
                            src {
                                childImageSharp {
                                    gatsbyImageData(width: 400)
                                }
                            }
                        }
                        links {
                            type
                            url
                        }
                        subjects
                        name
                        visible
                        degree
                        contacts {
                            type
                            content
                        }
                    }
                }
            }
        }
    `);
};
