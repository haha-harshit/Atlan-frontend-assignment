import Nav from 'react-bootstrap/Nav';

function NavBar() {

  let styles = {
    marginTop: "10px"
  }

  return (
    <Nav
      activeKey="/home"
    >
      <Nav.Item>
        <Nav.Link style={styles} href="/home"><h2><strong>SQL Editor</strong></h2></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;