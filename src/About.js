import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
// import { TweenLite } from 'gsap'
import { TimelineLite } from "gsap";


class About extends Component {
    constructor(props) {
        super(props)
        this.myElement = null;
        this.myTween = new TimelineLite({paused: true});
    }

    componentDidMount() {
        this.myTween.staggerTo(this.myElements, 0.5, {y: 0, autoAlpha: 1}, 0.1);
    }

    render() {
        return (
            <div id="about-component">
                <h1 ref={ div => this.myElement = div }>About Matt</h1>

                <p>Honestly, I'm not trying to take myself too seriously or anything so I'm not going to try to dress up this 'About Me' section with too many flowery descriptions of myself like JavaScript Iteration Ninja or Berlin Expats' Guiding Spirit.  So I'll just start with some basic facts about me...</p>

                <p>I'm a full stack web developer from Long Island, New York, and I'm currently living in Berlin, Germany.  I've been working as a programming teacher for last 2+ years.  I've sinced transitioned back into a full time developer role as Senior Software Engineer at Takeaway.com.</p>

                <p>I've recently decided I want to break into the blogosphere and start writing.  The articles I write span different categories - web development, self help, music, philosophy - I don't like to limit myself to one topic.  Perhaps later on I will settle into a niche market, but for now, I'm happily erratic and all over the place.</p>

                <section>
                    <h2>Developer Profile</h2>
                    <Grid>
                        <Grid.Column width={ 8 }>
                            <ul>
                                <li>PHP</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Git</li>
                                <li>SQL / Postgres</li>
                                <li>MongoDB</li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column width={ 8 }>
                            <ul>
                                <li>JavaScript</li>
                                <li>Node</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>AngularJS</li>
                                <li>Vue</li>
                                <li>jQuery</li>
                            </ul>
                        </Grid.Column>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default About
