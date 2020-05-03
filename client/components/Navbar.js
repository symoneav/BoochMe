import React from 'react'
import {Link} from 'react-router-dom'


 const Navbar =  () => (
    <div>
      <header>
      <h1>BOOCHME</h1>
    </header>
    <nav>
        <div>
            <Link to='/Home'>Home</Link>
            <Link to='/Map'>BoochMe</Link>
        </div>
    </nav>
    </div>
)

export default  Navbar