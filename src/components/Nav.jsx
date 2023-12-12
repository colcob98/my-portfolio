import { Link, useLocation } from 'react-router-dom';

export default function Nav({ links }) {
  const currentPage = useLocation().pathname;

    return (
        <nav>
          <ul className="links-container">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.props.to}
              className={currentPage === link.props.to ? 'nav-link-active' : 'nav-link-nonactive'}
            >
              {link.props.children}
            </Link>
          </li>
        ))}
      </ul>
        </nav>
    );
}
