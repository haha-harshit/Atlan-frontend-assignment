import Nav from 'react-bootstrap/Nav';


function NavBar(props) {

  let styles = {
    marginTop: "10px"
  }

  return (
    <Nav
      // activeKey="/home"
    >
      <Nav.Item>
        <Nav.Link style={styles} href="/home"><h2><strong>SQL Editor</strong></h2><span style={{color:'#0a58ca'}}>powered by</span> <span><img style={{marginTop:"-4px"}} src={props.logo} height="60px" width="60px" alt="Atlan-logo" /></span></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;