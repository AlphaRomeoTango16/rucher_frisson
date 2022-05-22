import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

DealerCard.propTypes = {
    dealer: propTypes.object.isRequired
}

export default function DealerCard({dealer}) {
    return (
        <DealerCardContainer>
            <Content>
                <DealerName>{dealer.name}</DealerName>
                <DealerAdress>{dealer.adress}</DealerAdress>
                <DealerPhone>{dealer.phone}</DealerPhone>
            </Content>
            <PhoneContainer>
                <PhoneLogo icon={faPhone}/>
            </PhoneContainer>
        </DealerCardContainer>
    )
}

const DealerCardContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
`

const DealerName = styled.div`
    font-family: Spartan-Regular;
    font-size: 17px;
    margin-top: 5px;
    margin-bottom: 15px;
`

const DealerAdress = styled.div`
    font-family: Spartan-Regular;
    font-size: 13px;
    margin-bottom: 10px;
`

const DealerPhone = styled.div`
    font-size: 13px;
    font-family: Spartan-Regular;
`

const PhoneContainer = styled.div`
    width: 25px;
    height: 25px;
    padding: 20px;
    margin-right: 20px;
`

const PhoneLogo = styled(FontAwesomeIcon)`
    width: 20px;
`