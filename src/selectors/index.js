import { createSelector } from 'reselect'

export const articlesSelector = state => state.articles
export const dateRangeSelector = state => state.filters.dateRange
export const selectedSelector = state => state.filters.dateRange

export const filtratedArticles = createSelector(
  articlesSelector,
  selectedSelector,
  dateRangeSelector,
  (articles, selected, dateRange) => {
    const { from, to } = dateRange
    return articles.filter(article => {
      const published = Date.parse(article.date)
      return (
        (!selected.length ||
          selected.find(selected => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)
