import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="navbar bg-gradient-to-r from-emerald-100 via-emerald-50 to-emerald-100 shadow-md px-6">
      <div className="flex-1 flex items-center gap-3">
        <div className="w-12 h-12 bg-emerald-700 rounded-md flex items-center justify-center shadow-md">
          <span className="text-white text-2xl font-bold">SA</span>
        </div>
        <div className="text-2xl font-extrabold text-emerald-800 tracking-wide">
          Voyage
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-emerald-800 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/hadj">Hajj & Umrah</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
