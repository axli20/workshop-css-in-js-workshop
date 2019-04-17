import React, { Component } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid #F05252;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  margin: 2em 0;
  padding: 2em 2em;
  border-radius: 3px;
`;
const Button = styled.button`
color: white;
padding: 0 2em;
margin: 0 1em;
background: #F05252;
border: 2px solid #F05252;
border-radius: 3px;
`;
const List = styled.ul`
display: flex;
flex-direction: row;
justfy-content: space-around;
list-style-type: none;
margin: 0em 2em;
`;
// const ListItem = styled.li`
// padding: 0 2em;
// color: #F05252;
// `;

const ListItem2 = styled(Button)`
color: #F05252;
background: white;
transition: background 0.5s;
&:hover {
  background: #F05252;
}
`;

class NavBar extends Component {
  render() {
    return (
      <Bar>
        <Button>MyTube</Button>
        <List>
          <ListItem2><a href="#">Home</a></ListItem2>
          <ListItem2><a href="#">About</a></ListItem2>
          <ListItem2><a href="#">FAQ</a></ListItem2>
          <ListItem2><a href="#">Contact</a></ListItem2>
        </List>
      </Bar>
    );
  }
}

export default NavBar;
