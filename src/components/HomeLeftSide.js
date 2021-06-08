import React from 'react'
import styled from 'styled-components'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AddIcon from '@material-ui/icons/Add';
function HomeLeftSide() {
    return (
        <Container>
            <TopContainer>
                <HeaderImg />
                <UserImg  >
                    <img src="/images/my-image.jpg" />
                </UserImg>
                <UserName>
                    <Name>
                        <a href="#">Youcef Belkadem</a>
                    </Name>
                    <Headline>
                        Hello guys ...
                    </Headline>
                </UserName>

                <Devider></Devider>
                <ConnectionContainer>
                    <TextContainer>
                        <FirstLine>
                            Connections
                    </FirstLine>
                        <SecondLine>
                            Grow your network
                    </SecondLine>
                    </TextContainer>
                    <NetIc>
                        <PersonAddIcon />
                    </NetIc>
                </ConnectionContainer>
                <Devider></Devider>
                <PremiumContainer>
                    <TextContainer>
                        <FirstLine>
                            Access exlusive tools & insights
                    </FirstLine>
                        <SecondLine>
                            <Carre>
                            </Carre>
                            <a href="#">Try premium free for 1 month</a>
                        </SecondLine>
                    </TextContainer>
                </PremiumContainer>

                <Devider></Devider>
                <MyItemContainer>
                    <BookIC>
                        <BookmarkIcon />
                    </BookIC>
                    <TextItem>My items</TextItem>
                </MyItemContainer>

            </TopContainer>
            <BottomContainer>
                <FirstTextContainer>
                    <a href="#">Groups</a>
                </FirstTextContainer>
                <SecondTextContainer>
                    <TextItems>
                        <a href="#">Events</a>
                    </TextItems>
                    <AddIc>
                        <AddIcon />
                    </AddIc>
                </SecondTextContainer>
                <ThirdTextContainer>
                    <a href="#">Followed Hashtags</a>
                </ThirdTextContainer>
                <Devider></Devider>

                <Discover>
                    Discover More
                </Discover>

            </BottomContainer>
        </Container>
    )
}

export default HomeLeftSide
const Container = styled.div`
//background-color:white;
//margin:0 10px;
//border-radius:5px;
//overflow:hidden;
width:20%;
`
const TopContainer = styled.div`
background-color:white;
border-radius:5px;
margin:0 10px;
overflow:hidden;
//width:100%;
`
const UserImg = styled.div`
display:flex;
justify-content:center;
cursor:pointer;
img{
border-radius:50%;
width:50px;
height:50px;
margin-top:-30px;
border:2px solid white;

}

`
const HeaderImg = styled.div`
    background-color:#007399;
    height:50px;
    top:0;
    left:0;
    right:0;
`

const UserName = styled.div`
text-align:center;
display:flex;
flex-direction:column;
margin-top:20px;
`
const Name = styled.span`
font-weight:500;
cursor:pointer;
a{
    color:#000;
    text-decoration:none;
    &:hover{
        text-decoration:underline;
    }
}
`
const Headline = styled.span`
font-size:12px;
`
const Devider = styled.div`
border:0.1px solid #e6e6e6;
right:0;
left:0;
margin:10px 0;
`
const ConnectionContainer = styled.div`
display:flex;
align-items:center;
padding:0 10px;
cursor:pointer;
&:hover{
    background-color:#d9d9d9;
}
`
const TextContainer = styled.div`
display:flex;
//align-items:center;
flex-direction:column;
flex:1;
`
const FirstLine = styled.div`
font-size:12px;
color:#737373;
white-space: nowrap;
`
const SecondLine = styled.div`
font-size:12px;
display:flex;
white-space: nowrap;
a{
padding-left:5px;
    font-size:11px;
    text-decoration:none;
    color:#000;
    &:hover{
        color:blue;
    }
}
`
const NetIc = styled.div`

`
const PremiumContainer = styled.div`
padding:0 10px;
&:hover{
     background-color:#d9d9d9;
}
`
const Carre = styled.div`
background-color:#e7a33e;
height:15px;
width:15px;
border-radius:3px;
`
const MyItemContainer = styled.div`
padding:0 10px;
display:flex;
align-items:center;
margin-bottom:10px;
cursor:pointer;
&:hover{
     background-color:#d9d9d9;
}
`
const TextItem = styled.div`
padding-left:2px;
font-size:12px;
color:#666666;
`
const BookIC = styled.div`
color:#666666;
align-items:center;
//height:12px;

`
const BottomContainer = styled.div`
background-color:white;
border-radius:5px;
margin:0 10px;
overflow:hidden;
margin-top:5px;

`
const FirstTextContainer = styled.div`
padding:0 10px;
a{
    text-decoration:none;
    font-size:11px;
    color:blue;
    &:hover{
        text-decoration:underline;
    }
}
`
const SecondTextContainer = styled.div`
padding:0 10px;
display:flex;
align-items:center;
`
const ThirdTextContainer = styled.div`
padding:0 10px;
a{
    text-decoration:none;
    font-size:11px;
    color:blue;
    &:hover{
        text-decoration:underline;
    }
}
`
const AddIc = styled.div`
cursor:pointer;
display:flex;
align-items:center;
color:#808080;
`
const TextItems = styled.div`
flex:1;
a{
    text-decoration:none;
    font-size:11px;
    color:blue;
    &:hover{
        text-decoration:underline;
    }
}
`
const Discover = styled.div`
margin-bottom:10px;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
cursor:pointer;
color:#808080;
font-weight:600;
&:hover{
    background-color:#d9d9d9;
}
`
