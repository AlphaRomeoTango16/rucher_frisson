import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

DealerCard.propTypes = {
    dealer: propTypes.object.isRequired,
    selectCard: propTypes.func.isRequired,
    selectedCard: propTypes.bool.isRequired,
    mobileDevice: propTypes.bool.isRequired
}

export default function DealerCard({dealer, selectCard, selectedCard, mobileDevice}) {
    return (
        <DealerCardContainer
            onClick={() => selectCard(dealer)}
            mobileDevice={mobileDevice}
        >
            <Content $selectedCard={selectedCard}>
                <DealerName $selectedCard={selectedCard}>{dealer.name}</DealerName>
                <DealerAdress $selectedCard={selectedCard}>{dealer.address}</DealerAdress>
                <DealerPhone $selectedCard={selectedCard}>{dealer.phone}</DealerPhone>
            </Content>
            <PhoneContainer $selectedCard={selectedCard}>
                <PhoneLogo icon={faPhone} $selectedCard={selectedCard}/>
            </PhoneContainer>
        </DealerCardContainer>
    )
}

const DealerCardContainer = styled.div`
    display: flex;
    width: 100%;
    height: ${({mobileDevice}) => mobileDevice ? '100px' : '90px'};
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    cursor: pointer;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    background-color: ${({$selectedCard}) => $selectedCard ? 'black' : 'white'};
`

const DealerName = styled.div`
    font-family: Spartan-Regular;
    font-size: 17px;
    margin-top: 5px;
    margin-bottom: 15px;
    color: ${({$selectedCard}) => $selectedCard ? 'white' : 'black'};
`

const DealerAdress = styled.div`
    font-family: Spartan-Regular;
    font-size: 13px;
    margin-bottom: 10px;
    color: ${({$selectedCard}) => $selectedCard ? 'white' : 'black'};
`

const DealerPhone = styled.div`
    font-size: 13px;
    font-family: Spartan-Regular;
    color: ${({$selectedCard}) => $selectedCard ? 'white' : 'black'};
`

const PhoneContainer = styled.div`
    padding-top: 35px;
    padding-right: 35px;
    background-color: ${({$selectedCard}) => $selectedCard ? 'black' : 'white'};
`

const PhoneLogo = styled(FontAwesomeIcon)`
    width: 20px;
    color: ${({$selectedCard}) => $selectedCard ? 'white' : 'black'};
`