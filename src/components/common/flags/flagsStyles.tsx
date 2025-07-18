import styled, { css } from 'styled-components';
import { IconButton, Tooltip, tooltipClasses } from '@mui/material';

// Types
import { IconButtonProps } from './types/styleTypes';
import { StyledTooltipProps } from '../tooltip/types/styleTypes';

export const FlagWrapper = styled.div`
    width: fit-content;
    cursor: pointer;
    pointer-events: auto;
    transition: opacity 0.5s ease, display 0.5s ease;
    display: block;
    opacity: 1;

    @media (max-width: 480px) {
        position: fixed;
        bottom: 0.25rem;
        left: 0.25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        position: fixed;
        left: 0.75rem;
        bottom: 0.75rem;
    }
`;

export const StyledFlag = styled.div`
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background-size: 100%;
    background-color: red;
    box-shadow: var(--primary-box-shadow) var(--primary-dark);

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        height: 2.25rem;
        width: 2.25rem;
    }
`;

export const FlagDropdown = styled.div<{ $showLangMenu: boolean }>`
    flex-direction: column;
    display: ${({ $showLangMenu }) => ($showLangMenu ? 'flex' : 'none')};
`;

export const StyledIconButton = styled(IconButton)<IconButtonProps>`
    &.MuiIconButton-root {
        height: 2.5rem;
        width: 2.5rem;
        margin-bottom: 0.25rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 1024px) {
        &.MuiIconButton-root {
            margin-bottom: 1.25rem;
        }
    }
`;

export const StyledTooltip = styled(
    ({ className, ...props }: StyledTooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ),
)(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 'normal',
        padding: '0.5rem 1rem',
    },
    [`& .${tooltipClasses.tooltipArrow}`]: {
        backgroundColor: 'var(--secondary-dark)',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: 'var(--secondary-dark)',
    },
    '@media (max-width: 1024px)': {
        [`& .${tooltipClasses.tooltip}`]: {
            display: 'none',
        },
    },
}));
