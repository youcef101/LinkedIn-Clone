import React, { useState } from 'react'
import styled from 'styled-components'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function AddPosts() {
    const [modal, setOpen] = useState(false)
    const ToggleOpen = () => {
        setOpen(true);
    }
    const ToggleClose = () => {
        setOpen(false)
    }
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

                <ActionContainer onClick={ToggleOpen}>
                    {modal == true ?
                        <PhotoModalContainer isOpen={ToggleClose}>
                            <PhotoModalHeader>Edit your photo</PhotoModalHeader>
                            <PhotoModalBody >
                                <SelectBtn >
                                    <FileInput type="file" id="file" />
                                    <label htmlFor="file">Select images to share</label>
                                </SelectBtn>
                            </PhotoModalBody>
                            <PhotoModalFooter>
                                <CloseBtn onClick={ToggleClose}>Close</CloseBtn>
                                <SubmitBtn>Add Photo</SubmitBtn>
                            </PhotoModalFooter>
                        </PhotoModalContainer> : null}
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
height:45px;
padding:13px 0;
border:1px solid #595959;
cursor:pointer;
border-radius:30px;
display:flex;
align-items:center;
span{
    padding-left:20px;
    
    display:flex;
    align-items:center;
    text-align:center;
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
const ActionContainer = styled.button`
margin-bottom:10px;
//width:100px;
height:35px;
background-color:white;
border:none;
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
const PhotoModalContainer = styled(Modal)`
// background-color:black;
// height:100px;
// width:100px;
`
const PhotoModalHeader = styled(ModalHeader)``
const PhotoModalBody = styled(ModalBody)`
display:flex;
justify-content:center;
align-items:center;
`
const PhotoModalFooter = styled(ModalFooter)``
const CloseBtn = styled.button`
border:1px solid gray;
border-radius:50px;
padding:0 15px;
background-color:transparent;
cursor:pointer;
//width:20%;
&:hover{
    background-color: #e6e6e6;
}
`
const SubmitBtn = styled(CloseBtn)`
border-radius:50px;
`
const SelectBtn = styled.button`
background-color:white;
border:none;
border-radius:4px;
:focus{
       border:2px solid blue;
   }
    &:hover{
     border-radius:4px;
     background-color:#b3d1ff;
 }
label{
padding:5px 15px;
 color:blue;
 font-weight:500;
 cursor:pointer;
 font-size:16px;

 

  
}


 `
const FileInput = styled.input`
display:none;

`