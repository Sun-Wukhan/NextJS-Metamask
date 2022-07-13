import React, {useEffect, useState } from 'react'
import Header from '../component/Header'
import styled from 'styled-components'
import Main from '../component/Main'
import Sidebar from '../component/Sidebar'
import Promos from '../component/Promos'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY, 
    ethers.getDefaultProvider(
      'https://rinkeby.infura.io/v3/f6f2abd9890b41d48964e69c1f5ee0a9'
    )
  )
)

function Dashboard({address}) {
  const [walletBalance, setWalletBalance] = useState(0)
  const [sanityTokens, setSanityTokens] = useState([])
  const [thirdWebTokens, setThirdWebTokens] = useState([]);

  useEffect(() => {
    const getAllTokens = async () => {
      const coins = await fetch(
          "https://1qqrrbw6.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%20%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%20%0A%20%20logo%0A%7D"
        )
      const sanityTokens = (await coins.json()).result
      setSanityTokens(sanityTokens)

      setThirdWebTokens(
      sanityTokens.map(token => sdk.getTokenModule(token.contractAddress))
        )
      } 
    getAllTokens(); 
  }, [])

  return (
    <Wrapper>
      <Sidebar/>
      <MainContainer>
     <Header walletAddress={address} sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens}/>
     <Main walletAddress={address} sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens} />
     </MainContainer>
     <Promos/>
    </Wrapper>
  )
}

export default Dashboard

const Wrapper = styled.div`
height: 100%; 
width: 100%; 
display: flex;
background-image: url('https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb');
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
background-size: cover;
`; 

const MainContainer = styled.div`
flex: 1; `