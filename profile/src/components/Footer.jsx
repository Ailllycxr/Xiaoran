function Footer() {
  return (
    <footer className="footer">
      <p>Author: Xiaoran</p>
      <p>
        Email:
        <a href="ABC.com">ABC.com</a>
      </p>
      <p>
        LinkedIn:
        <a href="ABC.com">ABC.com</a>
      </p>
      <p>
        GitHub:
        <a href="githubabc.com">abc.github</a>
      </p>

      <p>&copy; {new Date().getFullYear()} Xiaoran </p>
    </footer>
  );
}

export default Footer;
