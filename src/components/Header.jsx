import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Header() {
    const links = [
    <Link key={1} to="/">
        About Me
    </Link>,
    <Link key={2} to="/Portfolio">
        Portfolio
    </Link>,
    <Link key={3} to="/Resume">
        Resume
    </Link>,
    <Link key={4} to="/Contact">
        Contact
    </Link>,
    ]
    return <div className='header'><h1>Collier Cobb</h1><Nav links={links} /></div>;
}