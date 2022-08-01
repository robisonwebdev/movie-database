import React from 'react';
import ScrollerCard from './ScrollerCard';
import '../../../../styles/main/media/scroller/Scroller.css';

const Scroller = ({ content, show, title }) => {
    const slicedContent = content.slice(0, (show || 10));

    const buildScrollerCards = slicedContent?.map(item => {
        return <ScrollerCard key={item.id} cardInfo={item} />
    });

    return (
        <section className='media_scroller'>
            {console.log(content)}
            <h2>{title}</h2>
            <div className='scroller_cards'>
                {buildScrollerCards}
            </div>
        </section>
    );
};

export default Scroller;