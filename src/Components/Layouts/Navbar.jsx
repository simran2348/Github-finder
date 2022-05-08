import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl text-primary-content' />
          <Link
            to={'/'}
            className='text-lg text-primary-content font-bold align-middle'
          >
            {title}
          </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link
              to={'/'}
              className='btn btn-ghost rounded-btn btn-sm text-primary-content'
            >
              Home
            </Link>
            <Link
              to={'/about'}
              className='btn btn-ghost rounded-btn btn-sm text-primary-content'
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder'
}

Navbar.propsTypes = {
  title: PropTypes.string
}

export default Navbar
