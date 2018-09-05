import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contacts extends Component {
  render() {
    return (
      <div className="contact-body">
      <Grid className="contact-grid">
      <Cell col={6}>
      <h2>Desmond van Zurk</h2>
      <img
      src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
      alt="avatar"
      style={{height:'250px'}}
      />
      <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
      I am very interested in the learning potential of human beings, and so in 2013
      I decided to plunge myself into an experiment: To apply the 10000 hour rule
      of deliberate practice on golf. I would give myself 10 years to achieve this goal,
      and currently speaking I am 4500 hours into the progress.</p><br/>

      <p>Having studied Physical therapy at the Hogeschool van Amsterdam and graduating
      in 2016, I have decided to make a career switch to programming in 2018.
      The main reason for this switch was the lack of passion in my previous profession.
      The approach of becoming a programmer was to apply the 10000 hour theory again,
      using deliberate practice in order to achieve my maximum potential by the year 2025.
      It's a daunting idea, but I believe hard work can achieve everything.</p>
      </Cell>
      <Cell col={6}>
      <h2>Contact me</h2>
      <hr/>
      <div className="contact-list">
        <List>
          <ListItem>
            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
            <i className="fa fa-phone-square" area-hidden="true"/>
            (123) 456 7890
            </ListItemContent>
          </ListItem>

          <ListItem>
            <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
            <i className="fa fa-envelope" area-hidden="true"/>
            d.van.zurk@gmail.com
            </ListItemContent>
          </ListItem>
          </List>
      </div>


      </Cell>
      </Grid>
      </div>
    );
  }
}

export default Contacts
