//  ·        Create a project using create-react-app
//npx create-vite@latest

// ·        Create App.js in the src folder and use it as a root component for your React app.
import React from "react";
import Structuring from "./Structuring";
import PRODUCT from "./product";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <section>
      <div className="d-flex ">
        <Structuring
          Name={"Emmanuel"}
          Description={"Tall and Handsome"}
          Pic={
            <img
              src="https://th.bing.com/th/id/R.8359b42bbcae99fc2473fb9bdb6e1ae0?rik=FdiaSrRDfG9mAQ&pid=ImgRaw&r=0"
              width={100}
              height={100}
              alt="Emmanuel"
            />
          }
          Price={1000}
        />

        <Structuring
          Name={"Tommy"}
          Description={"Tall and Handsome"}
          Pic={
            <img
              src="https://th.bing.com/th/id/R.8359b42bbcae99fc2473fb9bdb6e1ae0?rik=FdiaSrRDfG9mAQ&pid=ImgRaw&r=0"
              width={100}
              height={100}
              alt="Tommy"
            />
          }
          Price={1000}
        />
      </div>
      <div className="d-flex ">
        <Structuring
          Name={"Betty"}
          Description={"Tall and Handsome"}
          Pic={
            <img
              src="https://th.bing.com/th/id/R.8359b42bbcae99fc2473fb9bdb6e1ae0?rik=FdiaSrRDfG9mAQ&pid=ImgRaw&r=0"
              width={100}
              height={100}
              alt="Betty"
            />
          }
          Price={1000}
        />
        <Structuring
          Name={"Irine"}
          Description={"Beautiful and calm"}
          Pic={
            <img
              src="https://th.bing.com/th/id/R.8359b42bbcae99fc2473fb9bdb6e1ae0?rik=FdiaSrRDfG9mAQ&pid=ImgRaw&r=0"
              width={100}
              height={100}
              alt="Irine"
            />
          }
          Price={1000}
        />
        <Structuring
          Name={"Goodluck"}
          Description={"Short and Cool"}
          Pic={
            <img
              src="https://th.bing.com/th/id/R.8359b42bbcae99fc2473fb9bdb6e1ae0?rik=FdiaSrRDfG9mAQ&pid=ImgRaw&r=0"
              width={100}
              height={100}
              alt="Goodluck"
            />
          }
          Price={3000}
        />
      </div>
      {/* // ·Import the json object created previously into all newly created
      components. */}
      <div
        className="text-success d-flex h-10 "
        style={{ width: "18rem", height: "10rem" }}
      >
        {PRODUCT.map((item) => {
          return (
            <Structuring
              key={item.id}
              Name={item.Name}
              Price={item.Price}
              image={item.image}
            />
          );
        })}
      </div>
    </section>
  );
}

export default App;

// Instructions

//  ·        Create a project using create-react-app
//npx create-vite@latest

// ·        Create App.js in the src folder and use it as a root component for your React app.

// ·        Create a file called product.js with a json object of a product’s name, price, description, and a path or URL to an image. (Don’t forget to export the json object)

// ·        Create four components that return the product’s name, price, description, and image. (Name.js, Price.js, Description.js, and Image.js)

// ·        Export all your components so that they can be used in the root component (in App.js)

// ·        Import the json object created previously into all newly created components.

// ·        Create a card that contains all components created using react-bootstrap in your App.js.

// ·        Display a message below the card that says Hello, then your first name, or if you didn’t yet provide your first name, display “Hello, there!” (You can provide your name as a variable above the root component)

// ·        Display an image if the first name is provided.

// ·        Be creative as much as possible with your styling!
