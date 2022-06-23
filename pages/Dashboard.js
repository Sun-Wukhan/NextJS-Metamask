import React from 'react'
import Header from '../component/Header'
import styled from 'styled-components'
import Main from '../component/Main'
import Sidebar from '../component/Sidebar'
import Promos from '../component/Promos'

function Dashboard({address}) {
  return (
    <Wrapper>
      <Sidebar/>
      <MainContainer>
     <Header walletAddress={address}/>
     <Main/>
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