import { graphql, useStaticQuery } from 'gatsby';
import { SocialProfile } from 'gatsby-theme-portfolio-minimal/src/components/SocialProfiles';
import { ImageObject } from 'gatsby-theme-portfolio-minimal/src/types';

interface ContactSectionQueryResult {
    allContactJson: {
        sections: {
            name: string;
            email: string;
            description: string;
            address: string;
            telephone?: string;
            image: ImageObject;
            socialProfiles: {
                from: SocialProfile[];
                showIcons: boolean;
            };
        }[];
    };
}

export const useLocalDataSource = (): ContactSectionQueryResult => {
    return useStaticQuery(graphql`
        query CustomContactSectionQuery {
            allContactJson {
                sections: nodes {
                    name
                    email
                    description
                    address
                    telephone
                    image {
                        alt
                        src {
                            childImageSharp {
                                gatsbyImageData(width: 140)
                            }
                        }
                        objectFit
                    }
                    socialProfiles {
                        from
                        showIcons
                    }
                }
            }
        }
    `);
};
