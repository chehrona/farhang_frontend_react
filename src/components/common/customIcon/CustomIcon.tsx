import React from 'react';

// Types
import { CustomIconProps } from './types';

const CustomIcon: React.FC<CustomIconProps> = ({ icon, size = 22 }) => {
    switch (icon) {
        case 'instagram':
            return (
                <img
                    src="./icons/socials/instagram.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                />
            );
        case 'pinterest':
            return (
                <img
                    src="./icons/socials/pinterest.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                />
            );
        case 'twitter':
            return (
                <img
                    src="./icons/socials/twitter.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                />
            );
        case 'tiktok':
            return (
                <img
                    src="./icons/socials/tiktok.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                />
            );

        // Header icons
        case 'menu':
            return (
                <img
                    src="./icons/action/menu.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                />
            );
        case 'copyright':
            return (
                <img
                    src="./icons/copyright.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                />
            );

        // Flags
        case 'tj':
            return (
                <img
                    src="./icons/flags/tj.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                />
            );
        case 'ru':
            return (
                <img
                    src="./icons/flags/ru.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                />
            );
        case 'en':
            return (
                <img
                    src="./icons/flags/en.svg"
                    height={`${size}rem`}
                    width={`${size}rem`}
                />
            );

        default:
            return null;
    }
};

export default CustomIcon;
