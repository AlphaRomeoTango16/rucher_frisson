import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';


export default function Form() {

    return (
        <FormContainer action='index.php' name='myform' method='POST'>
            <FormTitle>Nous contacter</FormTitle>
                <FirstContainer>
                    <LabelName htmlFor='name'/>
                    <InputName type='text' id='name' name='Nom' placeholder='Votre nom' minlength='2' maxlength='60' required/>
                    <LabelEmail htmlFor='email'/>
                    <InputEmail type='text' id='email' name='Email' placeholder='Votre email' require/>
                </FirstContainer>
                <SecondContainer>
                    <LabelText htmlFor='message'/>
                    <TextArea type='text' id='message' name='Message' placeholder='Votre message' required minlength='2' maxlength='60'/>
                </SecondContainer>
                <InputButton type='submit' value='Envoyer'>
                    Envoyer
                    <EnvelopeIcon icon={faEnvelopeOpenText} />
                <EnvelopeCloseIcon icon={faEnvelope} />
                </InputButton>
        </FormContainer>
    )
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 100px;
    padding: 20px;
`

const FormTitle = styled.h2`
    display: flex;
    font-family: FiraSansCondensed-Regular;
    margin-bottom: 50px;
`

const FirstContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`

const SecondContainer = styled.div`
    display: flex;
`

const LabelName = styled.label`
`

const InputName = styled.input`
    width: 50%;
    font-family: Spartan-Light;
    height: 50px;
    padding-left: 20px;
    margin: 10px;
    background: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    ::placeholder {
        color: #363636;
    }
`

const LabelEmail = styled.label`
`

const InputEmail = styled.input`
    font-family: Spartan-Light;
    width: 50%;
    height: 50px;
    padding-left: 20px;
    margin: 10px;
    background: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid grey;
    border-radius: 0;
    ::placeholder {
        color: #363636;
    }
`

const LabelText = styled.label`
`

const TextArea = styled.textarea`
    font-family: Spartan-Light;
    width: 100%;
    height: 200px;
    padding-left: 20px;
    padding-top: 20px;
    margin: 10px;
    border: 1px solid grey;
    border-radius: 0;
    ::placeholder {
        color: #363636;
    }
`

const InputButton = styled.button`
    display: inline-block;
    margin: 10px;
    margin-top: 30px;
    position: relative;
    height: 50px;
    font-family: Spartan-Regular;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid black;
    color: black;
    border-radius: 10px;
    background: transparent;
    overflow: hidden;
    transition: 0.08s ease-in;
    :hover{
        color: white;
    }
    :before{
        content: '';
        position: absolute;
        background: black;
        bottom: 0;
        left: 0;
        top: 0;
        right: 100%;
        z-index: -1;
        transition: right .3s;
    }
    :hover:before{
        right: 0;
        color: white;
    }
`

const EnvelopeIcon = styled(FontAwesomeIcon)`
    width: 15px;
    margin-left: 10px;
    ${InputButton}:hover & {
        display: none;
    }
`

const EnvelopeCloseIcon = styled(FontAwesomeIcon)`
    width: 15px;
    margin-left: 10px;
    display: none;
    ${InputButton}:hover & {
        display: inline-block;
    }
`