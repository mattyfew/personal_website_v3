import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'

class Nav extends Component {
    constructor() {
        this.state = {}
    }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render () {
        return (
            <div>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                        <Segment inverted="inverted" textAlign='center' style={{
                                minHeight: 700,
                                padding: '1em 0em'
                            }} vertical="vertical">
                            <Menu fixed={fixed
                                    ? 'top'
                                    : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size='large'>
                                    <Container>
                                        <Menu.Item as='a' active="active">
                                            Home
                                        </Menu.Item>
                                        <Menu.Item as='a'>Work</Menu.Item>
                                        <Menu.Item as='a'>Company</Menu.Item>
                                        <Menu.Item as='a'>Careers</Menu.Item>
                                        <Menu.Item position='right'>
                                            <Button as='a' inverted={!fixed}>
                                                Log in
                                            </Button>
                                            <Button as='a' inverted={!fixed} primary={fixed} style={{
                                                    marginLeft: '0.5em'
                                                }}>
                                                Sign Up
                                            </Button>
                                        </Menu.Item>
                                    </Container>
                                </Menu>
                                <HomepageHeading/>
                            </Segment>
                        </Visibility>

                        {props.children}
                    </Responsive>
                </div>
        )
    }


}

export default Nav
