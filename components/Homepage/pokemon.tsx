import { Card, Col, Container } from "react-bootstrap";

function Pokemon(props: any) {
  const { name, image } = props;
  return (
    <Col xs={12} sm={6} md={3} lg={4} className="p-3">
      <Card>
        <Card.Header className="text-center p-2 bg-gradient-secondary text-black">
          {name}
        </Card.Header>
        <Card.Img
          src={image}
          className="imagecard mx-auto p-4 bg-gradient-primary img-fluid"
          style={{ width: 300, height: 300 }}
        />
        <Card.Footer className="text-center p-2 bg-gradient-secondary text-black">
          <button className="btn btn-light"> Explore {name} </button>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default Pokemon;
