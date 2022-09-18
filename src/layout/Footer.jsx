function Footer() {
    return <footer className="page-footer pink lighten-4">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="https://github.com/Blckvia/Movies_project.git">GitHub</a>
      </div>
    </div>
  </footer>
}

export {Footer}