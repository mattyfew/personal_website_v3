import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
// import { CSSTransition } from 'react-transition-group'

class Home extends Component {
    render() {
        return (
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column className="home-container">
                        <img className="home-logo" src="/img/logo.svg" alt="Matt Fewer Logo"/>
                    </Grid.Column>
                    <Grid.Column className="home-container">
                        <img className="home-pic" src="/img/ga_headshot-edit.png" alt="Matt Fewer"/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Home
