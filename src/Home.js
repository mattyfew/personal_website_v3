import React, {Component} from 'react'
import { Grid, Image } from 'semantic-ui-react'

class Home extends Component {
    render() {
        return (
            <Grid columns={2} divided="divided">
                <Grid.Row>
                    <Grid.Column>
                        Test
                    </Grid.Column>
                    <Grid.Column>
                        Test
                    </Grid.Column>
                    <Grid.Column>
                        Test
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        Test
                    </Grid.Column>
                    <Grid.Column>
                        Test
                    </Grid.Column>
                    <Grid.Column>
                        Test
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Home
