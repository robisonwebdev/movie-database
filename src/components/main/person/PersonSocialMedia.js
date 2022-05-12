import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const PersonSocialMedia = ({ socialMedia }) => {
    const { facebook, instagram, twitter } = socialMedia;
    const socialMediaArray = [
        {
            address: `https://www.facebook.com/${facebook}`,
            id: `${facebook}_1`,
            icon: <FacebookIcon />,
            platform: facebook
        },
        {
            address: `https://www.instagram.com/${instagram}`,
            id: `${instagram}_2`,
            icon: <InstagramIcon />,
            platform: instagram
        },
        {
            address: `https://twitter.com/${twitter}`,
            id: `${twitter}_3`,
            icon: <TwitterIcon />,
            platform: twitter
        }
    ];

    const mapSocialMedia = socialMediaArray?.map(media => {
        if (media.platform === '' || media.platform === null) return null;

        return (
            <li key={media.id}>
                <a href={media.address} rel='noreferrer' target='_blank'>
                    {media.icon}
                </a>
            </li>
        );
    })

    return (
        <ul className='person_social_media'>
            {mapSocialMedia}
        </ul>
    );
};

export default PersonSocialMedia;