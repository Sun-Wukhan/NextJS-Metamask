import React from 'react'
import styled from 'styled-components'
import Portfolio from './Portfolio'

function Main({thirdWebTokens, sanityTokens, walletAddress}) {
  return (
    <Wrapper><Portfolio walletAddress={walletAddress} sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens} /></Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  
  & div {
    border-radius: 0.4rem;
  }`