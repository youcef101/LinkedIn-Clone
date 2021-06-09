import React from 'react'
import styled from 'styled-components'
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import PublicSharpIcon from '@material-ui/icons/PublicSharp';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';

function Posts() {
    return (
        <Container>
            <CardHeaderContainer>
                <UserInfoContainer>
                    <UserImg>
                        <img src="/images/my-image.jpg" />
                    </UserImg>
                    <UserInfo>
                        <UserName>youssef belkadem</UserName>
                        <UserBio>welcome guys ...</UserBio>
                        <PostedTime>
                            <Time>3d</Time>
                            <span>.</span>
                            <PublicIc>
                                <PublicSharpIcon />
                            </PublicIc>
                        </PostedTime>
                    </UserInfo>
                    <SettingIc>
                        <MoreHorizSharpIcon />
                    </SettingIc>
                </UserInfoContainer>
            </CardHeaderContainer>


            <PostHeader>
                <span>
                    hello i'm new in linkedin,so please tell what did i do?
                    hello i'm new in linkedin,so please tell what did i do?
                    hello i'm new in linkedin,so please tell what did i do?
                    hello i'm new in linkedin,so please tell what did i do?
                </span>
            </PostHeader>
            <PostBody>
                <PostedImg>
                    <img src="/images/my-image.jpg" />
                </PostedImg>
                {/* <PostedVideo>

                </PostedVideo> */}
            </PostBody>
            <hr />
            <ActionContainer>
                <BtnContainer>
                    <BtnIc>
                        <ThumbUpAltOutlinedIcon />
                    </BtnIc>
                    <span>Like</span>

                </BtnContainer>
                <BtnContainer>
                    <BtnIc>
                        <CommentOutlinedIcon />
                    </BtnIc>
                    <span>Comment</span>

                </BtnContainer>
                <BtnContainer>
                    <BtnIc>
                        <ReplyOutlinedIcon />
                    </BtnIc>
                    <span>Share</span>

                </BtnContainer>
                <BtnContainer>
                    <BtnIc>
                        <SendOutlinedIcon />
                    </BtnIc>
                    <span>Send</span>

                </BtnContainer>
            </ActionContainer>
            <PostView>
                <StaticIc>
                    <EqualizerOutlinedIcon />
                </StaticIc>
                <a href=""><b>16 views</b> of your post in the feed</a>
            </PostView>
            <CommentPostContainer>

                <UserIamg>
                    <img src="/images/my-image.jpg" />
                </UserIamg>
                <CommentContainer>
                    <CommentPost placeholder="Add a comment ...">

                    </CommentPost>
                    <BtnsContainer>
                        <BtnIcs>
                            <SentimentSatisfiedOutlinedIcon />

                        </BtnIcs>
                        <BtnIcs>

                            <PhotoSizeSelectActualOutlinedIcon />
                        </BtnIcs>
                    </BtnsContainer>

                </CommentContainer>

            </CommentPostContainer>
        </Container>
    )
}

export default Posts
const Container = styled.div`
background-color:white;
border-radius:5px;
margin-top:5px;
margin-bottom:10px;
border:1px solid #d9d9d9;
hr{
    width:95%;
}
`
const CardHeaderContainer = styled.div``
const UserInfoContainer = styled.div`
display:flex;
align-items:center;

`
const UserImg = styled.div`
padding-top:5px;
padding-left:5px;
cursor:pointer;
img{
    border-radius:50%;
    width:45px;
    height:45px;
}
`
const UserInfo = styled.div`
flex:1;
padding-left:10px;
`
const UserName = styled.span`
font-weight:700;
font-size:12px;
cursor:pointer;
`
const UserBio = styled.div`
font-size:10px;
color:#737373;
`
const PostedTime = styled.div`
font-size:10px;
display:flex;
align-items:center;
color:#737373;
span{
    //height:30px;
    padding:0 3px;
}
`
const Time = styled.div`

`
const PublicIc = styled.div`
.MuiSvgIcon-root{
    width:16px;
    height:14px;
}
`
const SettingIc = styled.div`
color:#737373;
margin-top:-7px;
cursor:pointer;
padding-right:10px;
&:hover{
    //background-color:#e6e6e6;
    //border-radius:50%;
    
}
`
const PostHeader = styled.div`
padding:10px 10px;
width:80%;
span{
    font-size:14px;
}
`
const PostBody = styled.div``
const PostedImg = styled.div`
//padding-bottom:5px;
cursor:pointer;
img{
    width:100%;
    object-fit:contain;
}
`
const ActionContainer = styled.div`
display:flex;
align-items:center;
padding-bottom:10px;
@media(max-width:875px){
    display:flex;
    flex-direction:column;
    //align-items:center;
    justify-content:flex-start;
    //left:0;
}
`
const BtnContainer = styled.div`
display:flex;
align-items:center;
padding-left:15px;
color:#808080;
cursor:pointer;
span{
    font-weight:700;
    font-size:12px;
    padding-left:5px;

}
`
const BtnIc = styled.div`

display:flex;
align-items:center;
.MuiSvgIcon-root{
    width:20px;
    height:20px;
}
`
const PostView = styled.div`
padding: 0 13px;
padding-bottom:10px;
display:flex;
align-items:center;
a{
    text-decoration:none;
    color:#808080;
    font-size:14px;
    &:hover{
      text-decoration:underline;
    }
}
`
const StaticIc = styled.div`
display:flex;
align-items:center;
.MuiSvgIcon-root{
    width:20px;
    height:20px;
}
`
const CommentPostContainer = styled.div`
display:flex;
align-items:center;
padding:0 5px;
padding-bottom:10px;
padding-top:10px;
`
const CommentContainer = styled.div`
display:flex;
align-items:center;
background-color:white;
width:90%;
height:10px;
padding:13px 0;
border:2px solid  #595959;
border-radius:30px;


`
const CommentPost = styled.input`
display:flex;
align-items:center;
flex:1;
margin-left:20px;
width:70%;
border:none;
cursor:pointer;
:focus{
    outline:none;
}
`
const UserIamg = styled.div`
display:flex;
align-items:center;
padding-right:5px;
img{
    border-radius:50%;
    width:40px;
    height:40px;
}
`
const BtnsContainer = styled.div`
padding:0 10px;
display:flex;
align-items:center;

`
const BtnIcs = styled.div`
padding-left:10px;
cursor:pointer;
display:flex;
align-items:center;
color:#b3b3b3;
.MuiSvgIcon-root{
    width:20px;
    height:20px;
}
`