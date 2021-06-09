import React from 'react'
import styled from 'styled-components'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';

function AddPosts() {
    return (
        <Container>
            <StartPostContainer>
                <UserImg>
                    <img src="/images/my-image.jpg" />
                </UserImg>
                <PostContainer>
                    <span>Start a post</span>
                </PostContainer>
            </StartPostContainer>
            <PostActionContainer>
                <ActionContainer>
                    <ActionIc>
                        <PhotoIc />
                    </ActionIc>
                    <span>
                        Photo
                    </span>
                </ActionContainer>
                <ActionContainer>
                    <ActionIc>
                        <YouTubeIc />
                    </ActionIc>
                    <span>
                        Video
                    </span>
                </ActionContainer>
                <ActionContainer>
                    <ActionIc>
                        <EventIc />
                    </ActionIc>
                    <span>
                        Events
                    </span>
                </ActionContainer>
                <ActionContainer>
                    <ActionIc>
                        <ArticleIc />
                    </ActionIc>
                    <span>
                        Write article
                    </span>
                </ActionContainer>

            </PostActionContainer>
        </Container>
    )
}

export default AddPosts
const Container = styled.div`
background-color:white;
border-radius:5px;
border:1px solid #d9d9d9;
`
const StartPostContainer = styled.div`
display:flex;
align-items:center;
padding:13px 15px;
`
const UserImg = styled.div`
display:flex;
align-items:center;
img{
margin-right:5px;
    border-radius:50%;
    width:50px;
    height:50px;
    cursor:pointer;
}
`
const PostContainer = styled.div`
background-color:white;
width:90%;
height:20px;
padding:13px 0;
border:1px solid #595959;
cursor:pointer;
border-radius:30px;
span{
    padding-left:20px;
    display:flex;
    align-items:center;
    font-weight:500;
    font-size:13px;
    color:#595959;
}
&:hover{
    background-color:#f2f2f2;
}
`
const PostActionContainer = styled.div`
display:flex;
align-items:center;
padding:5px 13px;
justify-content:space-around;
@media(max-width:1100px){
    display:flex;
    flex-direction:column;
    //justify-content:flex-start;
    
}
`
const ActionContainer = styled.div`
margin-bottom:10px;
width:100px;
height:20px;
padding-right:25px;
cursor:pointer;
display:flex;
align-items:center;
span{
    font-weight:600;
    font-size:14px;
    color:#404040;
    white-space: nowrap;
   
}
&:hover{
    background-color:#f2f2f2;
    background-size:contain;
    //height:30px;
    
    border-radius:5px;
}
`
const ActionIc = styled.div`
//padding-bottom:5px;
padding-right:5px;
display:flex;
align-items:center;
.MuiSvgIcon-root{
    width:22px;
    height:22px;
}
`
const PhotoIc = styled(PhotoSizeSelectActualIcon)`
color:#99ccff;
`
const YouTubeIc = styled(YouTubeIcon)`
color:green;
`
const EventIc = styled(EventIcon)`
color:orange;
`
const ArticleIc = styled(AssignmentIcon)`
color:#ff80ff;
`
