const headerBackground = (movie) => {
    const { backdrop_path } = movie;
    const backgroundURL = `http://image.tmdb.org/t/p/original/${backdrop_path}`;
    const styling = {
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${backgroundURL})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return styling;
};

export default headerBackground;