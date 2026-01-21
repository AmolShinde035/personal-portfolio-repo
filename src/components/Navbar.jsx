export default function Navbar() {

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          Amol Shinde
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="portfolioNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {["home", "about", "skills", "experience", "projects", "education",].map(
              (item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href={`#${item}`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              )
            )}

            <li className="nav-item ms-lg-3">
              <button
                className="btn btn-outline-light btn-sm"
                onClick={toggleDarkMode}
              >
                🌙
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
