import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import TransferModal from './modal/TransferModal'
import Link from 'next/link'

function Header({walletAddress, connectWallet}) {
    

  return (
    <Wrapper>
    <Title>Home</Title>
    <ButtonContainer>
    {walletAddress ? (
          <WalletLink>
            <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
            <WalletAddress>
              {walletAddress.slice(0, 7)}***{walletAddress.slice(35)}
            </WalletAddress>
          </WalletLink>
        ) : (
          <Button onClick={() => connectWallet('injected')}>
            Connect MetaMask
          </Button>
        )}
    <Button>Buy/Sell</Button>
    <Button>Escrow</Button>
    <Button>Log-Out</Button>
    </ButtonContainer>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
padding: 1rem 1.5rem; 
display: flex;
align-items: center;
width: calc(100%);
height: 80px;
border-bottom: 1px solid #282b2f; 
border-radius: 10px;
background-color: #000000;
background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
`; 


const Title = styled.div`
font-size: 2rem;
font-weight: 200; 
flex: 1; 
margin-right: 0.5rem;
`; 

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
text-align: center;
`; 

const WalletLink = styled.div`
  font-size: 0.8rem;
  font-size: 1.2rem;
  margin-right: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const WalletLinkTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #27ad75;
  font-weight: 600;
`
const WalletAddress = styled.div`
  font-size: 0.8rem;
  /* color: #8a919e; */
`

const Button = styled.div`
background-color: darkgrey;
color: #000;
padding: 10px; 
height: 50px;
width: 100px;
justify-content: center; 
text-align: center; 
font-size: 19px; 
font-weight: 300; 
border-radius: 10px; 
margin-left: 30px;

&:hover {
    cursor: pointer;
    background-color: orangered;
}
`;

