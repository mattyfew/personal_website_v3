import React from 'react'
import { Link } from 'react-router-dom'

function AdminHome() {
    return (
        <div>
            <h2>You are currently not logged in</h2>
            <h3><Link to="/login">Login here</Link></h3>
        </div>
    )
}

export default AdminHome
