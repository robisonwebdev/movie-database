import React from 'react';
import ScrollerCard from './ScrollerCard';
import '../../../../styles/main/media/scroller/Scroller.css';

const Scroller = ({ content, show }) => {
    const slicedContent = content.slice(0, (show || 10));

    const buildScrollerCards = slicedContent?.map(item => {
        return <ScrollerCard key={item.id} cardInfo={item} />
    });

    return (
        <section className='media_scroller'>
            {console.log(content)}
            {buildScrollerCards}
        </section>
    );
};

export default Scroller;