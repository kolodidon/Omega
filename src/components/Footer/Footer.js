import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaVk, FaYoutube } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { 
    FooterContainer, 
    FooterSubscription, 
    FooterSubHeading, 
    FooterSubText, 
    Form, 
    FormInput, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinksItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIcon,
    SocialIconLink
} from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Подпишитесь на рассылку, чтобы получать свежие новости.
                </FooterSubHeading>
                <FooterSubText>
                    Вы можете отписаться от рассылки в любой момент.
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Ваша почта' />
                    <Button fontBig>Подписаться</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Про нас</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Как мы работаем</FooterLink>
                        <FooterLink to='/'>Отзывы</FooterLink>
                        <FooterLink to='/'>Карьера с нами</FooterLink>
                        <FooterLink to='/'>Инвесторы</FooterLink>
                        <FooterLink to='/'>Правила</FooterLink>
                    </FooterLinksItems>
                    
                    <FooterLinksItems>
                        <FooterLinkTitle>Контакты</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Свяжитесь с нами</FooterLink>
                        <FooterLink to='/'>Поддержка</FooterLink>
                        <FooterLink to='/'>Карьера с нами</FooterLink>
                        <FooterLink to='/'>Отделы</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Видео</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Прислать видео</FooterLink>
                        <FooterLink to='/'>Амбассадоры</FooterLink>
                        <FooterLink to='/'>Агенства</FooterLink>
                        <FooterLink to='/'>Инфлюенсеры</FooterLink>
                    </FooterLinksItems>
                    
                    <FooterLinksItems>
                        <FooterLinkTitle>Социальные сети</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Instagram</FooterLink>
                        <FooterLink to='/'>Facebook</FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                        <FooterLink to='/'>VK</FooterLink>
                    </FooterLinksItems>
                    
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon/>
                        ОМЕГА
                    </SocialLogo>
                    <WebsiteRights>OMEGA 2021 Все права защищены</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label='Facebook'><FaFacebook/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label='Instagram'><FaInstagram/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label='Youtube'><FaYoutube/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label='Twitter'><FaTwitter/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label='Linkedin'><FaLinkedin/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label='Vkontakte'><FaVk/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
