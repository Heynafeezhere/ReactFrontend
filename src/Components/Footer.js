function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    {/* ThinkUni Logo */}
                </a>
                <span className="mb-3 mb-md-0 text-muted">© 2025 ThinkUni, Inc or its affilates</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-facebook fa-2x"></i></a></li>
                <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-instagram fa-2x"></i></a></li>
                <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-youtube fa-2x"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer;