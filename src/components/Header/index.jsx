import './header.css';

import { Link } from 'react-router-dom';


function Header() {

    return (
        <div className='sidebar' >
            <div>
                <img
                    src='../../src/assets/icon_parceiros.svg'
                    alt="Logo"
                    width={200}
                    height={200}
                />
            </div>

            <Link to='/'>
                Dashboard
            </Link>

            <Link to='/cadastro' >
                Parceiros
            </Link>

            <Link >
                Perfil
            </Link>
        </div>
    )
}

export default Header