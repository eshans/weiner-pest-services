import { Link } from 'react-router-dom'


function NotFound() {
  return (
    <div>
      <div className="error-text">
        404 Error - Page Not Found!
        </div>
      <p className="error-link">
        <Link className='link' to='/'>
          Back To Home
        </Link>
      </p>
    </div>
  )
}

export default NotFound
