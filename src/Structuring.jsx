import React from "react";
import Card from "react-bootstrap/Card";

// Create four components that return the product’s name, price, description, and image. (Name.js, Price.js, Description.js, and Image.js)
function Structuring({ Name, Description, Pic, Price }) {
  const NewName = () => {
    return "emmy";
  };

  return (
    <section className="d-flex pt-5 border-custom">
      <Card style={{ width: "18rem", height: "20rem" }}>
        <Card.Body Row className="bg-dark">
          <Card.Title>
            <h2 Col md={4} className="d-flex text-primary">
              {Name}
            </h2>
          </Card.Title>
          <p Col md={4} className="d-flex p-2 text-danger  m-3">
            {Description}
          </p>
          <div Col md={4} className="d-flex p-2 text-danger  m-3">
            {Pic} <p>Price: ${Price}</p>
          </div>
        </Card.Body>
      </Card>

      <div variant="primary">
        {/* // · Display a message below the card that says Hello, then your first
        name, or if you didn’t yet provide your first name, display “Hello,
        there!” (You can provide your name as a variable above the root
        component) */}
        <h1>Hello {NewName()}</h1>
      </div>
    </section>
  );
}
export default Structuring;
