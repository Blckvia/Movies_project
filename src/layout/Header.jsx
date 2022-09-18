function Header() {
    return <nav className="pink darken-4">
    <div className="nav-wrapper">
      <a href="!#" className="brand-logo">React Movies</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://github.com/Blckvia/Movies_project.git">GitHub</a></li>
        {/* <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li> */}
      </ul>
    </div>
  </nav>
}

export {Header}