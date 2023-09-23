import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Products = () => {
  return (
      <section className='not-found-page'>
          <div className="not-found-container">
              <h3 className='margin-remove'>Page Not Found ya 3asal</h3>
              <p className='margin-remove'>Looks like you followed a broken link or entered a URL that doesn't exist</p>
          <Link to='/' className="margin-add back-to-home">                    <FaChevronLeft className='icon' />
Back to our website</Link>
              <hr />
              <p className='margin-remove'>If this is your site, and you weren't expecting a 404 for this path, please visit <a href="#">Page is not found</a>for troubleshooting tips</p>
          </div>
    </section>
  )
}

export default Products