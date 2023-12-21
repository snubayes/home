import { graphql, useStaticQuery } from 'gatsby';

interface PublicationsSection {
    html: string;
    frontmatter: {
        sectionId: string;
    };
}

export interface PublicationsSectionQueryResult {
    allPublicationsSection: {
        sections: PublicationsSection[];
    };
}

export const useLocalDataSource = (): PublicationsSectionQueryResult => {
    return useStaticQuery(graphql`
        query PublicationsSectionQuery {
            allPublicationsSection: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/sections/publications/" } }) {
                sections: nodes {
                    html
                    frontmatter {
                        sectionId
                    }
                }
            }
        }
    `);
};

export const getSectionBySectionId = (res: PublicationsSectionQueryResult, id: string): PublicationsSection => {
    const sectionList = res.allPublicationsSection.sections.filter((section) => section.frontmatter.sectionId === id);
    if (sectionList.length === 0) {
        throw new Error(`Could not find section ${id} by id.`);
    } else if (sectionList.length > 1) {
        throw new Error(`Found section ${id} multiple times. Make sure the id is unique.`);
    } else {
        return sectionList[0];
    }
};
