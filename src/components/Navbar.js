import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg`} style={props.colchange}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/" style={props.colchange}>{props.title}</Link> */}
                <a className="navbar-brand" href="#" style={props.colchange}>{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="/" style={props.colchange}>Home</Link> */}
                            <a className="nav-link active" aria-current="page" href="#" style={props.colchange}>Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about" style={props.colchange}>{props.abouttxt}</Link>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}

                    {/* COLOR PALETTE */}
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" onClick={props.colorToggle1} id="inlineRadio1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineRadio1">Light</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" onClick={props.colorToggle2} id="inlineRadio2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Dark</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" onClick={props.colorToggle3} value="option3" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Blue</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" onClick={props.colorToggle4} id="inlineRadio4" value="option4" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Green</label>
                    </div>


                    {/* DARK MODE */}
                    {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    abouttxt: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set Title",
    abouttxt: "About "
}