import Head from 'next/head'
import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'

export default function Home() {
  const {address, connectWallet } = useWeb3();

  return (
   <Wrapper>
     {address ? (
       <Dashboard address={address} />
     ) : (
       <Wallet>
         <Button onClick={() => connectWallet('Jack in, Megaman. Execute!')}>
           Connect MetaMask 
         </Button>
         <Details>
          This app is optimized 
           <br/> for Google Chrome
         </Details>
       </Wallet>

     )}
   </Wrapper>
  )

}

const Wrapper = styled.div`
display: flex; 
height: 100vh; 
max-width: 100vw; 
background-image: url('https://static.cryptobriefing.com/wp-content/uploads/2020/11/02092249/MetaMask-How-to-Guide-cover.jpg');
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
color: white;
display: grid; 
place-items: center; 
`;

const Wallet = styled.div`
display: flex;
flex-direction: column; 
justify-content: center; 
align-items: center; 
`;


const Button = styled.button`
border: 1px solid #282b2f; 
padding: 0.8rem; 
font-size: 1.5rem; 
font-weight: 400; 
border-radius: 0.5rem; 
background-color: orangered;
color: #000; 

&:hover {
  cursor: pointer;
}
`;

const Details = styled.div`
margin-top: 1.1rem; 
font-size: 1.2rem; 
font-family: sans-serif;
text-align: center;
font-weight: 900; 
color: lightgray;
`;

