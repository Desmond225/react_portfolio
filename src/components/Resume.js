import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  render() {
    return (
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{textAlign: 'center'}}>
          <img
            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
            alt="avatar"
            style={{height:'200px'}}
          />
          </div>
            <h2 style={{paddingTop:'2em'}}>Desmond van Zurk</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop:'3px solid #833FB2', width:'50%'}}/>
            <p>My name is Desmond and in March of 2018 I decided to apply the
            10000 hour theory on becoming a programmer. This decision came after
            finding out my true passion was not found in my former job as a physical
            therapist. I have always been keen about computers, technology and numbers,
            so finding out about programming really opened up my eyes. If everything
            goes according to plan, I should be able to reach my goal by 2025, coding
            for 30 hours a week in a deliberate manner.</p>
            <hr style={{borderTop:'3px solid #833FB2', width:'50%'}}/>
            <h5>Address</h5>
            <p>Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>123 456 456 7890</p>
            <h5>Email</h5>
            <p>d.van.zurk@gmail.com</p>
            <h5>Web</h5>
            <p>coming soon!</p>
            <hr style={{borderTop:'3px solid #833FB2', width:'50%'}}/>

        </Cell>
        <Cell className="resume-right-col"col={8}>
          <h2>Education</h2>

          <Education
          startYear={2011}
          endYear={2016}
          schoolName="Hogeschool van Amsterdam"
          schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the"
          />

          <Education
          startYear={2005}
          endYear={2011}
          schoolName="Vechtstede college"
          schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the"
          />
          <hr style={{borderTop:'3px solid #e22947'}}/>

        <h2>Programming experience</h2>

        <Experience
        startYear={2018}
        endYear={2018}
        jobName="No experience"
        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the"
        />
        <Experience
        startYear={2018}
        endYear={2025}
        jobName="10000 hours of coding"
        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the"
        />
        <hr style={{borderTop:'3px solid #e22947'}}/>

        <h2>Skills</h2>
        <Skills
          skill="HTML/CSS"
          progress={6.9}
          hours="69/1000 hours"
        />
        <Skills
          skill="Javascript"
          progress={5.5}
          hours="55/1000 hours"
        />
        <Skills
          skill="React"
          progress={1.5}
          hours="15/1000 hours"
        />
        <Skills
          skill="Python"
          progress={8.3}
          hours="83/1000 hours"
        />
        <Skills
          skill="Django"
          progress={3.8}
          hours="38/1000 hours"
        />
        <Skills
          skill="SQL"
          progress={.1}
          hours="1/1000 hours"
        />
        <Skills
          skill="PHP"
          progress={0}
          hours="0/1000 hours"
        />
        <Skills
          skill="Total"
          progress={2.81}
          hours="281/10000 hours"
        />


        </Cell>
      </Grid>
    </div>
  );
  }
}

export default Resume
