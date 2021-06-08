import React from 'react'
import styled from 'styled-components'
import HomeLeftSide from './HomeLeftSide'
import HomeMiddleSide from './HomeMiddleSide'
import HomeRightSide from './HomeRightSide'

function Home() {
    return (
        <Container>
            <HomeLeftSide />
            <HomeMiddleSide />
            <HomeRightSide />
        </Container>
    )
}

export default Home
const Container = styled.div`
margin-top:20px;
display:flex;
align-items:flex-start;
justify-content:center;
`
