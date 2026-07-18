export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__mark" href="#top">
          <span className="nav__mark-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <rect x="3" y="4" width="18" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="7" cy="8" r="0.9" fill="currentColor" />
              <circle cx="7" cy="16" r="0.9" fill="currentColor" />
              <line x1="11" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="1.4" />
              <line x1="11" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1.4" />
              <line x1="11" y1="16" x2="15" y2="16" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </span>
          LearnStack
        </a>
        <nav className="nav__links">
          <a href="#catalog">Catalog</a>
          <a href="#how">How it works</a>
          <a href="#top" className="nav__cta">Sign in</a>
        </nav>
      </div>
    </header>
  );
}
