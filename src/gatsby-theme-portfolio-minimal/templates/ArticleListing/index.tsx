import React from 'react';
import { Page } from 'gatsby-theme-portfolio-minimal/src/components/Page';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { Seo } from '../../components/Seo';
import { Slider } from 'gatsby-theme-portfolio-minimal/src/components/Slider';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation';
import { ArticleCard } from '../../components/ArticleCard';
import { Button, ButtonType } from 'gatsby-theme-portfolio-minimal/src/components/Button';
import { ArticleTemplateData } from '../Article/data';
import { BsFunnel, BsFunnelFill} from "react-icons/bs";
import * as classes from './style.module.css';
import { pluralize } from 'gatsby-theme-portfolio-minimal/src/utils/pluralize';

interface ArticleListingTemplateProps {
    pageContext: {
        articles: ArticleTemplateData[];
        entityName?: string;
    };
}

interface FilterOption {
    label: string;
    selected: boolean;
    relatedArticleIds: string[];
}

export default function ArticleListingTemplate(props: ArticleListingTemplateProps): React.ReactElement {
    const ARTICLES_PER_PAGE = 9;
    const articles = props.pageContext.articles;
    const [filterToggle, setFilterToggle] = React.useState(false);
    const [filterOptions, setFilterOptions] = React.useState<FilterOption[]>(extractFilterOptions(articles));
    const [shownArticlesNumber, setShownArticlesNumber] = React.useState<number>(ARTICLES_PER_PAGE);

    function handleFilterOptionClick(optionLabel: string): void {
        const updatedFilterOptions = [...filterOptions];
        const selectedOptionIndex = updatedFilterOptions.map((o) => o.label).indexOf(optionLabel);
        updatedFilterOptions[selectedOptionIndex].selected = !updatedFilterOptions[selectedOptionIndex].selected;
        setFilterOptions(updatedFilterOptions);
    }

    function handleLoadMoreButtonClick(articlesNumber: number, selectedArticlesNumber?: number): void {
        const incrementedArticleNumber = shownArticlesNumber + ARTICLES_PER_PAGE;
        if (selectedArticlesNumber && selectedArticlesNumber >= shownArticlesNumber) {
            setShownArticlesNumber(incrementedArticleNumber);
        } else if (!selectedArticlesNumber && articlesNumber >= shownArticlesNumber) {
            setShownArticlesNumber(incrementedArticleNumber);
        }
    }

    function handleFilterOptionShow(): void {
        setFilterToggle(!filterToggle)
    }

    // Check if at least one filter option is selected. If so, create an array of all article ids that
    // are selected based on the current filter option selection. We use this later on to easily check
    // which articles to show.
    let selectedArticleIds: string[] = [];
    const filterSelected = filterOptions.map((o) => o.selected).indexOf(true) !== -1;
    if (filterSelected) {
        selectedArticleIds = filterOptions
            .filter((option) => option.selected) // Filter only for selected options
            .map((option) => option.relatedArticleIds) // Create an array of article ids arrays
            .flat(1) // Flatten the array to a string[]
            .filter((id, index, arr) => arr.indexOf(id) === index); // Remove duplicate article ids
    } 

    // const entities = pluralize(props.pageContext.entityName) ?? 'Articles';
    const entities = props.pageContext.entityName ?? 'Articles';

    return (
        <>
            <Seo title={`모든 ${entities}`} useTitleTemplate={true} />
            <Page>
                <Section anchor="articleListing" heading={entities}>
                    <div className={classes.Filter}>
                        <div 
                            className={classes.FilterToggle}
                            role="button"
                            onClick={() => handleFilterOptionShow()}>
                                {!filterSelected && (<BsFunnel size="2rem"/>)}
                                {filterSelected && (<BsFunnelFill size="2rem"/>)}
                        </div>
                        {filterOptions.map((option, key) => {
                            if ((!filterToggle && option.selected) || filterToggle){
                                return (
                                    <div
                                        key={key}
                                        role="button"
                                        onClick={() => handleFilterOptionClick(option.label)}
                                        className={[
                                            classes.Option,
                                            option.selected === true ? classes.Selected : null,
                                        ].join(' ')}
                                    >
                                        {option.label}
                                        <div className={classes.Counts}>
                                            {option.relatedArticleIds.length}
                                        </div>
                                    </div>        
                                );
                            } else {
                                return null
                            }
                        })}
                    </div>
                    <div className={classes.Listing}>
                        {articles
                            .filter((article) => !filterSelected || selectedArticleIds.includes(article.id))
                            .slice(0, shownArticlesNumber)
                            .map((article, key) => {
                                return (
                                    <ArticleCard
                                        key={key}
                                        showBanner={true}
                                        inListing={true}
                                        data={{
                                            image: article.banner,
                                            title: article.title,
                                            category: article.categories.join(' / '),
                                            publishedAt: new Date(article.date.replace(/-/g, '/')),
                                            link: article.slug,
                                            readingTime: article.readingTime.text,
                                        }}
                                    />
                                );
                            })}
                    </div>
                    {(filterSelected && selectedArticleIds.length > shownArticlesNumber) ||
                    (!filterSelected && articles.length > shownArticlesNumber) ? (
                        <div className={classes.LoadMore}>
                            <Button
                                type={ButtonType.BUTTON}
                                label="Load More"
                                onClickHandler={() =>
                                    handleLoadMoreButtonClick(
                                        articles.length,
                                        filterSelected ? selectedArticleIds.length : undefined,
                                    )
                                }
                            />
                        </div>
                    ) : null}
                </Section>
            </Page>
        </>
    );
}

// Helper function to calculate a sorted array of filter options based on the given articles
// We use the helper function before we initialize the state so that it can happen on the server.
function extractFilterOptions(articles: ArticleTemplateData[]): FilterOption[] {
    const filterOptions: FilterOption[] = [];
    const categoryList: string[] = [];
    articles.forEach((article) => {
        article.categories.forEach((category) => {
            if (!categoryList.includes(category)) {
                filterOptions.push({ label: category, selected: false, relatedArticleIds: [article.id] });
                categoryList.push(category);
            } else {
                const optionIndex = filterOptions.map((o) => o.label).indexOf(category);
                filterOptions[optionIndex].relatedArticleIds.push(article.id);
            }
        });
    });
    return filterOptions.sort((a, b) => (a.relatedArticleIds.length > b.relatedArticleIds.length ? -1 : 1));
}
