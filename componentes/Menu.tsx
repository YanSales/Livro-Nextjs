import Link from 'next/link'

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Home</a>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/catalogo">
                <a className="nav-link">Catálogo</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/novo">
                <a className="nav-link">Novo</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
