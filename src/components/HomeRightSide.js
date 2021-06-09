import React from 'react'
import styled from 'styled-components'
import ErrorIcon from '@material-ui/icons/Error';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function HomeRightSide() {
    return (
        <Container>
            <TopContainer>
                <TitleHeader>
                    <span>Today’s most viewed courses</span>
                    <ErrorIc>
                        <ErrorIcon />
                    </ErrorIc>
                </TitleHeader>
                <Faq>
                    <Question>
                        1.What's graphic design?
                </Question>
                    <Response>
                        Sean Adams
                </Response>
                </Faq>
                <Faq>
                    <Question>
                        2.the six morning habits of high performence?
                </Question>
                    <Response>
                        Sean Adams
                </Response>
                </Faq>
                <Faq>
                    <Question>
                        3.What's numeric design?
                </Question>
                    <Response>
                        Sean Adams
                </Response>
                </Faq>
                <ShowMore>
                    <span>Show more on LinkedIn learning</span>
                    <Arrow>
                        <ArrowForwardIcon />
                    </Arrow>
                </ShowMore>
            </TopContainer>
            <BottomContainer>

                <Wrap>
                    <img src="/images/my-image.jpg" />
                </Wrap>

            </BottomContainer>
        </Container>
    )
}

export default HomeRightSide
const Container = styled.div`

width:25%;
`
const TopContainer = styled.div`
background-color:white;
margin:0 10px;
border-radius:8px;
margin-bottom:5px;
border:1px solid #d9d9d9;

`
const TitleHeader = styled.div`
padding:0 5px;
display:flex;
padding-top:10px;
span{
//white-space: nowrap;
font-size:15px;
font-weight:500;
flex:1;
}


`
const Faq = styled.div`
display:flex;
flex-direction:column;
padding:5px 5px;
cursor:pointer;
&:hover{
    background-color:#d9d9d9;
}
`
const ErrorIc = styled.div`
color:#808080;
cursor:pointer;
`
const Question = styled.div`
font-size:13px;
font-weight:500;
//white-space: nowrap;
display:flex;
justify-content:flex-start;
`
const Response = styled.div`
white-space: nowrap;
font-size:10px;
`
const ShowMore = styled.div`
display:flex;
align-items:center;

padding:0 5px;
cursor:pointer;
width:80%;
span{
    font-size:13px;
    color:#808080;
    font-weight:500;
    padding-right:3px;
    
}
&:hover{
    background-color:#f2f2f2;
    border-radius:4px;
    border:1px solid white;
    
}

`
const Arrow = styled.div`
display:flex;
align-items:center;
color:#808080;


`
const BottomContainer = styled.div`
background-color:white;
margin:0 10px;
border-radius:8px;
overflow:hidden;
border:1px solid #d9d9d9;

`
const Wrap = styled.div`
cursor:pointer;
background-color:white;
display:flex;
justify-content:center;
img{
    width:95%;
    top:0;
    bottom:0;
}
`