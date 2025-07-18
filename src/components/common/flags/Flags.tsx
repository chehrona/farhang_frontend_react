import React, { useState, useEffect, useCallback } from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import staticText from '../../../miscellaneous/staticTexts.json';

// Material UI
import { ClickAwayListener } from '@mui/material';

// Custom components
import CustomIcon from '../customIcon/CustomIcon';

// Types
import { Langs } from '../../../appTypes';

// Styled components
import {
    FlagWrapper,
    FlagDropdown,
    StyledIconButton,
    StyledTooltip,
} from './flagsStyles';

const Flags: React.FC = () => {
    const [showLangMenu, setShowLangMenu] = useState<boolean>(false);
    const { lang, setLang } = useGlobalData();

    const showLangOptions = useCallback(() => {
        setShowLangMenu(true);
    }, []);

    const changeLang = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            const iconTitle = e.currentTarget.getAttribute(
                'data',
            ) as Langs | null;
            if (
                iconTitle &&
                (iconTitle === 'en' || iconTitle === 'ru' || iconTitle === 'tj')
            ) {
                setLang(iconTitle);
                setShowLangMenu(false);
            }
        },
        [setLang],
    );

    const handleClickAway = useCallback(() => {
        setShowLangMenu(false);
    }, []);

    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang]);

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <FlagWrapper>
                <FlagDropdown $showLangMenu={showLangMenu}>
                    {lang !== 'en' && (
                        <StyledIconButton data="en" onClick={changeLang}>
                            <StyledTooltip
                                title={staticText.LANGS['en']}
                                placement="right"
                                arrow
                            >
                                <CustomIcon icon="en" size={25} />
                            </StyledTooltip>
                        </StyledIconButton>
                    )}
                    {lang !== 'tj' && (
                        <StyledIconButton data="tj" onClick={changeLang}>
                            <StyledTooltip
                                title={staticText.LANGS['tj']}
                                placement="right"
                                arrow
                            >
                                <CustomIcon icon="tj" size={25} />
                            </StyledTooltip>
                        </StyledIconButton>
                    )}
                    {lang !== 'ru' && (
                        <StyledIconButton data="ru" onClick={changeLang}>
                            <StyledTooltip
                                title={staticText.LANGS['ru']}
                                placement="right"
                                arrow
                            >
                                <CustomIcon icon="ru" size={25} />
                            </StyledTooltip>
                        </StyledIconButton>
                    )}
                </FlagDropdown>
                <StyledIconButton onMouseEnter={showLangOptions}>
                    <StyledTooltip
                        title={staticText.LANGS[lang]}
                        placement="right"
                        arrow
                    >
                        <CustomIcon icon={lang} size={25} />
                    </StyledTooltip>
                </StyledIconButton>
            </FlagWrapper>
        </ClickAwayListener>
    );
};

export default Flags;
