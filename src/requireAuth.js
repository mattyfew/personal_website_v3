import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        componentDidMount() {
            this.shouldNavigateAway()
        }

        componentDidUpdate(nextProps) {
            this.shouldNavigateAway()
        }

        shouldNavigateAway() {
            if (!this.props.authenticated) {
                this.props.history.push('/login')
            }
        }

        render() {
            return (
                <ChildComponent {...this.props}/>
            )
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.auth.authenticated }
    }

    return connect(mapStateToProps)(ComposedComponent)
}
