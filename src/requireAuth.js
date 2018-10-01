import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

export default function(ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            console.log("aaa");
            if (!this.props.authenticated) {
                console.log("here");
                push('/admin')
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                push('/')
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props}/>
            )
        }
    }

    const mapStateToProps = (state) => {
        return { authenticated: state.authenticated }
    }

    return connect(mapStateToProps)(Authentication)
}
