import React from 'react';

// Hooks
import { useGlobalData } from '../../../hooks/useGlobalData';

// Helper
import staticText from '../../../miscellaneous/staticTexts.json';

// Custom components
import CustomIcon from '../customIcon/CustomIcon';

// Styled components
import {
    FooterContainer,
    FooterInnerContainer,
    Text,
    StyledIconButton,
    SocialsWrapper,
    InfoContainer,
    SocialsContainer,
    Title,
    StyledLink,
    LinksWrapper,
} from './footerStyles';

const Footer: React.FC = () => {
    const { lang } = useGlobalData();

    return (
        <FooterContainer>
            <FooterInnerContainer>
                <InfoContainer>
                    <SocialsContainer>
                        <Title>
                            {staticText.FOOTER_TITLES.links[lang].title}
                        </Title>
                        <LinksWrapper>
                            <StyledLink
                                to="mailto:farhangdictionary@gmail.com"
                                rel="noreferrer"
                                target={'_blank'}
                            >
                                {staticText.FOOTER_TITLES.links[lang].list[0]}
                            </StyledLink>
                        </LinksWrapper>
                    </SocialsContainer>
                    <SocialsContainer>
                        <Title>
                            {staticText.FOOTER_TITLES.resources[lang].title}
                        </Title>
                        <LinksWrapper>
                            <StyledLink
                                to={
                                    '#'
                                    // process.env.NODE_ENV === 'development'
                                    //     ? 'http://localhost:3002'
                                    //     : 'https://library.thetajikheritage.com'
                                }
                                // rel="noreferrer"
                                // target={'_blank'}
                            >
                                {
                                    staticText.FOOTER_TITLES.resources[lang]
                                        .list[0]
                                }
                            </StyledLink>
                        </LinksWrapper>
                    </SocialsContainer>
                    <SocialsContainer>
                        <Title>{staticText.FOOTER_TITLES.socials[lang]}</Title>
                        <SocialsWrapper>
                            <StyledLink
                                to="https://www.instagram.com/farhangwords/"
                                rel="noreferrer"
                                target={'_blank'}
                            >
                                <StyledIconButton>
                                    <CustomIcon icon="instagram" />
                                </StyledIconButton>
                            </StyledLink>
                            <StyledLink
                                to="https://www.pinterest.ca/thetajikheritage/"
                                rel="noreferrer"
                                target={'_blank'}
                            >
                                <StyledIconButton>
                                    <CustomIcon icon="pinterest" />
                                </StyledIconButton>
                            </StyledLink>
                            <StyledLink
                                to="https://www.youtube.com/@thetajikheritage"
                                rel="noreferrer"
                                target={'_blank'}
                            >
                                <StyledIconButton>
                                    <CustomIcon icon="twitter" />
                                </StyledIconButton>
                            </StyledLink>
                            <StyledLink
                                to="https://www.facebook.com/profile.php?id=61559405503836"
                                rel="noreferrer"
                                target={'_blank'}
                            >
                                <StyledIconButton>
                                    <CustomIcon icon="facebook" />
                                </StyledIconButton>
                            </StyledLink>
                        </SocialsWrapper>
                    </SocialsContainer>
                </InfoContainer>
                <Text>
                    <CustomIcon icon="copyright" size={15} />
                    {`2025 Farhang. ${staticText.FOOTER_TITLES.copyright[lang]}.`}
                </Text>
            </FooterInnerContainer>
        </FooterContainer>
    );
};

export default Footer;
