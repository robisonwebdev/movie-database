const headerBackground = (show) => {
    const { backdrop_path } = show;
    const backgroundURL = `https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces/${backdrop_path}`;
    const styling = {
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${backgroundURL})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return styling;
};

export default headerBackground;