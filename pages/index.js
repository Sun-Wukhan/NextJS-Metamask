
import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'
import Dashboard from './Dashboard';

export default function Home() {
  const {address, connectWallet } = useWeb3();

  return (
   <Wrapper>
     {address ? (
       <Dashboard address={address} />
    
     ) : (
       <Wallet>
         <Button onClick={() => connectWallet('injected')}>
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
background-image: url('https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb');
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
background-size: cover;
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
background-color: orange;
color: #000; 
box-shadow: 0px 8px 15px rgba(0.4, 0.3, 0.2, 0.9);


&:hover {
  cursor: pointer;
  background-color: orangered;
  font-weight: 500;
  box-shadow: 0px 8px 15px rgba(0.4, 0.3, 0.2, 0.9);

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

