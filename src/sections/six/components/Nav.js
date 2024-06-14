import Nav from 'react-bootstrap/Nav';

function navigation() {
  return (<>
   <h2 style={{textAlign:'left', margin:'15px 50px'}}>Create a new user </h2>
    <Nav style={{margin:'0px 40px',color:'grey'}}
    >
      <Nav.Item>
        <Nav.Link href="/home">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">User</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">New user</Nav.Link>
      </Nav.Item>
    </Nav>
  </>
   
  );
}

export default navigation;