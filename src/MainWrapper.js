import React from 'react'
import { Grid } from 'semantic-ui-react'

function MainWrapper(props) {
    return (
        <Grid id="main-wrapper">
            <Grid.Column width={ 3 } id="left-gutter" />

            <Grid.Column width={ 10 } id="main-section" >
                { props.children }
            </Grid.Column>

            <Grid.Column width={ 3 } id="right-gutter" />
        </Grid>
    )
}

export default MainWrapper
