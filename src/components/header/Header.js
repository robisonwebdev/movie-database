import React, { useState } from 'react';
import '../../styles/header/Header.css';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);

    return (
        <header>Header</header>
    );
};

export default Header;