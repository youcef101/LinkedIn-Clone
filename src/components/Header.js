import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import TextsmsRoundedIcon from '@material-ui/icons/TextsmsRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import AppsIcon from '@material-ui/icons/Apps';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <Container>
            <LinkedInLogo >
                <img src="https://static-exp1.licdn.com/sc/h/8zliikpi39umlw2wr99gu4a0u" />
            </LinkedInLogo>
            <SearchContainer>
                <SearchIc />
                <PlaceHolder placeholder="Search" />
            </SearchContainer>
            <MenuContainer>
                <MenuItem>
                    <NavLink exact to="/" >

                        <HomeIc />

                        <span>Home</span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/network">
                        <NetworkIc />
                        <span>My Network</span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/jobs">
                        <JobIc />
                        <span>Jobs</span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/messages">
                        <ChatIc />
                        <span>Messaging</span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/notifications">
                        <NotificationIc />
                        <span>Notifications</span>
                    </NavLink>
                </MenuItem>
                <UserContainer>
                    <UserImg  >
                        <img src="/images/my-image.jpg" />
                    </UserImg>
                    <AccountContainer>
                        <span>Me</span>
                        <ArrowDropDownRoundedIcon />
                    </AccountContainer>
                </UserContainer>

            </MenuContainer>
            <Border></Border>
            <WorkContainer>
                <AppIc>
                    <AppsIcon />
                </AppIc>
                <Work>
                    <span>Work</span>
                    <ArrowDropDownRoundedIcon />
                </Work>
            </WorkContainer>
            <Premium>
                <a href="">Try Premium Free for 1 Month</a>
            </Premium>





        </Container>
    )
}

export default Header
const Container = styled.div`
height:55px;
background-color:white;
display:flex;
align-items:center;
width:100%;
position:fixed;
 top:0;
// left:0;
// right:0;
// z-index:1;

`
const LinkedInLogo = styled.div`
display:flex;
align-items:center;
padding-left:120px;
cursor:pointer;
img{
    width:35px;
    height:35px;
}
`
const SearchContainer = styled.div`
display:flex;
align-items:center;
padding-left:17px;
width:20%;
//width:250px;
height:35px;
background-color:#e6ecff;
margin-left:5px;
border-radius:4px;


`
const SearchIc = styled(SearchIcon)`

`
const PlaceHolder = styled.input`
height:33px;
border:none;
background-color:#e6ecff;
:focus{
    outline:none;
}

`
const MenuContainer = styled.div`
display:flex;
align-items:center;
margin-left:100px;
width:35%;

`

const MenuItem = styled.div`
display:flex;
align-items:center;
flex-direction:column;
cursor:pointer;
margin:0 15px;
position:relative;
.active{
    span{color:#000;}
    
    &:after{
    position:absolute;
    content:"";
    height:1.5px;
    background:#000;
    right:0;
    left:0;
    bottom:-8px;
    opacity:1;
    transform-origin:center center;
    //ransform:scaleX(0);
    //transition:all 300ms cubic-bezier(0.25,0.46,0.45,0.94)0s;



}
}
a{
    text-decoration:none;
    display:flex;
    align-items:center;
    flex-direction:column;
}

 
span{
    font-size:12px;
    color:#737373;
    white-space: nowrap;
   
     &:hover{
        color:#000;
    }

}

`
const HomeIc = styled(HomeIcon)`
color:#737373;
&:hover{
    color:#000;
}
`
const NetworkIc = styled(SupervisorAccountRoundedIcon)`
color:#737373;
&:hover{
    color:#000;
}
`
const JobIc = styled(WorkRoundedIcon)`
color:#737373;
&:hover{
    color:#000;
}
`
const ChatIc = styled(TextsmsRoundedIcon)`
color:#737373;
&:hover{
    color:#000;
}
`
const NotificationIc = styled(NotificationsRoundedIcon)`
color:#737373;
&:hover{
    color:#000;
}
`
const UserContainer = styled.div`
cursor:pointer;
display:flex;
flex-direction:column;
margin-right:30px;

`
const UserImg = styled.div`
img{
width:25px;
height:25px;
border-radius:50%;
}
`
const AccountContainer = styled.div`
margin:-5px;
display:flex;
align-items:center;
color:#737373;
span{
    font-size:12px;
}
&:hover{
    color:#000;
}
`
const WorkContainer = styled.div`
cursor:pointer;
margin-right:20px;
width:5%;
@media(max-width:1150px){
     display:none;
 }

`
const Work = styled(AccountContainer)`

`
const AppIc = styled.div`
color:#737373;
&:hover{
    color:#000;
}
`
const Border = styled.div`
border:1px solid  #e6e6e6;
height:55px;
margin-right:30px;
@media(max-width:1150px){
     display:none;
 }

`
const Premium = styled.div`
 text-align:center;
 width:10%;
 cursor:pointer;
 @media(max-width:1150px){
     display:none;
 }
a{
    font-size:12px;
    color:#660000;
    text-decoration:none;
    &:hover{
        text-decoration:underline;
    }
}
`
