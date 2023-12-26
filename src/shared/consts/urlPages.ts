export const URL_PAGES = {
    THIS_WEEK:
        'https://rawg.io/api/games/lists/recent-games?discover=true&ordering=-added&page_size=20&page=1&key=',

    LAST_DAYS:
        'https://rawg.io/api/games/lists/recent-games-past?discover=true&ordering=-added&page_size=20&page=1&key=',

    NEXT_WEEK:
        'https://rawg.io/api/games/lists/recent-games-future?discover=true&ordering=-added&page_size=20&page=1&key=',

    BEST_OF_THE_YEARE:
        'https://rawg.io/api/games/lists/greatest?discover=true&ordering=-added&page_size=20&page=1&key=',

    POPULAR_IN_2022:
        'https://rawg.io/api/games/lists/greatest?year=2022&discover=true&ordering=-added&page_size=20&page=1&key=',

    ALL_TIME_TOP_250:
        'https://rawg.io/api/games/lists/popular?discover=true&&page_size=20&page=1&key=',
}
//  https://rawg.io/api/games/lists

export const GAMES_LIST_TITLE = {
    'resent-games': 'This week',
    'recent-games-past': 'Last 30 days',
    'recent-games-future': 'Next week',
    greatest: 'Best of the year',
    'greatest?year=2022': 'Popular in 2022',
    popular: 'All time top 250',
}
