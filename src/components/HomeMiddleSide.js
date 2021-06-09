import React from 'react'
import styled from 'styled-components'
import AddPosts from './AddPosts'
import Posts from './Posts'

function HomeMiddleSide() {
    return (
        <Container>
            <AddPosts />
            <Posts />
            <Posts />
        </Container>
    )
}

export default HomeMiddleSide
const Container = styled.div`
margin:0 10px;
width:40%;
`
