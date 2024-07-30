import {Link} from "react-router-dom";

function AppHeader() {
    return (
        <header className='header'>
            <Link to={'/'}>
                <div className={''}>
                    <h1 className=''>Путеводитель по странам</h1>
                </div>
            </Link>
        </header>
    )
}

export default AppHeader;