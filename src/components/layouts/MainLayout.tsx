import { Outlet, Link } from 'react-router-dom';
import './mainLayout.css'

function MainLayout() {
  return (
    <div>
      <header className='header-container'>
        <Link to={'/'}>Home</Link>
        <span>User Avatar</span>
      </header>
      <section className='body-container'>
        <Outlet />
      </section>
    </div>
  )
}

export default MainLayout;
