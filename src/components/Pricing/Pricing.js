import React from 'react'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import { GiCrystalBars, GiCutDiamond, GiRock } from 'react-icons/gi'
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature
} from './Pricing.elements.js'

const Pricing = () => {
    return (
        <IconContext.Provider value={{color: '#a9b3c1', size: 64}}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Наши тарифы</PricingHeading>
                    <PricingContainer>

                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiRock/>
                                </PricingCardIcon>
                                <PricingCardPlan>Базовый</PricingCardPlan>
                                <PricingCardCost>1000₽</PricingCardCost>
                                <PricingCardLength>В месяц</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>100 новых пользователей</PricingCardFeature>
                                    <PricingCardFeature>Дополнительные услуги на 3000₽</PricingCardFeature>
                                    <PricingCardFeature>Аналитика и таргетирование</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Выбрать тариф</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCrystalBars/>
                                </PricingCardIcon>
                                <PricingCardPlan>Продвинутый</PricingCardPlan>
                                <PricingCardCost>3000₽</PricingCardCost>
                                <PricingCardLength>В месяц</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>1000 новых пользователей</PricingCardFeature>
                                    <PricingCardFeature>Дополнительные услуги на 7000₽</PricingCardFeature>
                                    <PricingCardFeature>Аналитика генерации лидов</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Выбрать тариф</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCutDiamond/>
                                </PricingCardIcon>
                                <PricingCardPlan>Премиум</PricingCardPlan>
                                <PricingCardCost>10000₽</PricingCardCost>
                                <PricingCardLength>В месяц</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Неограниченные новые пользователи</PricingCardFeature>
                                    <PricingCardFeature>Дополнительные услуги на 13000₽</PricingCardFeature>
                                    <PricingCardFeature>Поддержка 24/7</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Выбрать тариф</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    )
}

export default Pricing
