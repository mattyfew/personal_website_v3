import React from 'react'
import { Grid } from 'semantic-ui-react'

function MainWrapper(props) {
    return (
        <Grid className="main-wrapper" style={ props.style }>
            <Grid.Column width={ 3 } className="left-gutter" />

            <Grid.Column width={ 10 } className="main-gutter" >
                { props.children }
            </Grid.Column>

            <Grid.Column width={ 3 } className="right-gutter" />
        </Grid>
    )
}

export default MainWrapper
