import React from 'react';

// Custom components
import CustomIcon from '../customIcon/CustomIcon';

// Styled components
import {
    MainContainer,
    SideContainer,
    Logo,
    Title,
    StyledLink,
} from './headerStyles';

const Header: React.FC = () => {
    return (
        <MainContainer>
            <SideContainer>
                <StyledLink to={'/'}>
                    <Logo src="./logo.svg" />
                </StyledLink>
            </SideContainer>
            <Title>Farhang</Title>
            <SideContainer></SideContainer>
        </MainContainer>
    );
};

export default Header;
