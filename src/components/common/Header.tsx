import React from 'react';

// Styled components
import { MainContainer, SideContainer, Logo, Title } from './headerStyles';
import CustomIcon from './customIcon/CustomIcon';

const Header: React.FC = () => {
    return (
        <MainContainer>
            <SideContainer>
                <Logo src="./logo.svg" />
            </SideContainer>
            <Title>Farhang</Title>
            <SideContainer>
                <CustomIcon icon="menu" color="var(--primary-light)" />
            </SideContainer>
        </MainContainer>
    );
};

export default Header;
