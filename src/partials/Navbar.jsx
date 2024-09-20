import { Box } from 'lucide-react';
import { Phone } from 'lucide-react';
import { User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl space-x-1">
          <div className="avatar">
            <div className="w-6 rounded-lg">
              <img src="iqbal.jpeg" alt="" />
            </div>
          </div>
          <span>iqbal farhan</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="hidden md:flex menu menu-horizontal px-1">
          <li>
            <NavLink to={'/'}>
              <User size={16} />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/project'}>
              <Box size={16} />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>
              <Phone size={16} />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
