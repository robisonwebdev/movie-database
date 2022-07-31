const headerBackground = (media) => {
    const { backdrop_path } = media;
    const backgroundURL = `http://image.tmdb.org/t/p/original/${backdrop_path}`;
    const styling = {
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${backgroundURL})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return styling;
};

export default headerBackground;