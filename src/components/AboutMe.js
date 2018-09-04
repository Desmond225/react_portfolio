import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, ProgressBar } from 'react-mdl';


class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme-body">
      <Grid className="aboutme-grid">
      <Cell col={9}>
      <h2>Coding for 10000 hours</h2>
      <img className="aboutme-img"
      src="https://i0.wp.com/www.allaboutlean.com/wp-content/uploads/2026/03/PDCA-Circle-Color.png?fit=449%2C449&ssl=1"
      alt="avatar"
      style={{height:'250px'}}
      />

      <p>My name is Desmond and I am a self thought (web) developer! I started
      my journey in March 2018, after finding out my true passion was not found in
      my former job as a physical therapist. I have always been keen about computers,
      technology and numbers, so finding out about programming really opened
      up my eyes. I started learning about C at first, quickly becoming engaged
      in the whole process of learning.</p>

      <p>Not long after this discovery I committed myself into applying the
      10000 hour(s) rule on becoming a skilled programmer. What does this mean?
      Well, studies have proven it would take 10000 hours of deliberate practice
      to reach a world-class level on basically anything, given we are capeable
      both physically and mentally.</p>

      <p>The process of deliberate practice is not new for me, since I started
      applying this theory to golf as well back in 2013. I am currently 4300 hours
      into that process, and the results have far exceeded my expectations.
      To this date, I am playing of a 1 handicap, nearly on scratch level!
      I have logged every hour of the journey in a blog, and also have a
      <a href="https://www.youtube.com/terefs">youtube channel</a> on which my swing
      transformation can be enjoyed.</p>

      <h3 style={{fontSize:'40px',fontFamily:'Anton'}}>Part 1: Front end web development (210/500 hours)</h3>
      <p>So far, I have logged nearly 300 hours of coding. In order to have a better
      understanding about my progress, I have split up the total hours over several
      parts of programming, such as different languages. The ultimate goal of
      coding for 10000 hours has many small goals to it,
      and becoming a front-end web developer is the first one of many. Based on
      coding bootcamps, I figured I would need rougly 500 hours of working on HTML,
      CSS, JS and Python in order to start applying for internships/jobs. </p>
      <hr />
      <List>
        <ListItem>
          <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
          HTML/CSS:<br/><br/>
          70/200 hours
          </ListItemContent>
          <ProgressBar progress={35} />
        </ListItem>
      </List>

      <List>
        <ListItem>
          <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
          Javascript:<br/><br/>
          55/200 hours
          </ListItemContent>
          <ProgressBar progress={28} />
        </ListItem>
      </List>

      <List>
        <ListItem>
          <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
          Python:<br/><br/>
          83/100 hours
          </ListItemContent>
          <ProgressBar progress={83} />
        </ListItem>
      </List>
      <h3 style={{fontSize:'40px',fontFamily:'Anton'}}>Part 2: Back end development (38/1000 hours)</h3>
      <hr />
      <List>
        <ListItem>
          <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
          Django: 38 hours
          </ListItemContent>
          <ProgressBar progress={10} />
        </ListItem>
      </List>

      <List>
        <ListItem>
          <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
          PostgreSQL: 1 hours
          </ListItemContent>
          <ProgressBar progress={1} />
        </ListItem>
      </List>

      <List>
        <ListItem>
          <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
          NodeJS: 1 hours
          </ListItemContent>
          <ProgressBar progress={1} />
        </ListItem>
      </List>

      <h3 style={{fontSize:'40px',fontFamily:'Anton'}}>Part 3: Other languages and programming related skills (1000 hours)</h3>
      <hr />
      <List>
        <ListItem>
          <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
          Computer science courses / mathematics: 30 hours
          </ListItemContent>
        </ListItem>
      </List>


      </Cell>
      <Cell col={3}>
      <h2>Learn more about my skills</h2>
      <hr/>
      <div className="contact-list">
        <h4>HTML</h4>
      </div>


      </Cell>
      </Grid>
      </div>
    );
  }
}

export default AboutMe
