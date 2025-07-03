import React from 'react';

// Types
import { CustomIconProps } from './types';

import { Icon } from './customIconStyles';

const CustomIcon: React.FC<CustomIconProps> = ({
    icon,
    color = 'var(--primary-dark)',
}) => {
    switch (icon) {
        case 'instagram':
            return <Icon href="/icons/socials/instagram.svg" fill={color} />;
        case 'pinterest':
            return <Icon href="/icons/socials/pinterest.svg" fill={color} />;
        case 'twitter':
            return <Icon href="/icons/socials/twitter.svg" fill={color} />;
        case 'tiktok':
            return <Icon href="/icons/socials/tiktok.svg" fill={color} />;

        // Header icons
        case 'menu':
            return <Icon href="/icons/action/menu.svg" fill={color} />;

        default:
            return null;
    }
};

export default CustomIcon;
