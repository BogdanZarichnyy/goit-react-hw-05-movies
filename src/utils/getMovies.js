const { REACT_APP_MY_API_KEY, REACT_APP_URL } = process.env;

export const getMovies = async (params, searchParams = {} ) => {
    const searchParameters = {
        api_key: REACT_APP_MY_API_KEY,
        language: 'en-US',
        ...searchParams,
    };

    try {
        return await fetch(`${REACT_APP_URL}${params}?` + new URLSearchParams(searchParameters).toString());
    }
    catch (error) {
        console.log(error);
    }
}

export const getSearchMovies = (params, query) => {
    const searchParameters = {
        query,
        page: 1,
        include_adult: 'false',
    };

    return getMovies(params, searchParameters);
}

export const getMovieReviews = params => {
    const searchParameters = {
        page: 1,
    };

    return getMovies(params, searchParameters);
}