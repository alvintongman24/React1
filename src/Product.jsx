// ·Import the json object created previously into all newly created components.
const PRODUCT = [
  {
    id: 1,
    Name: "Book",
    Price: 2000,
    Discription: "The yellow Sun",
    image:
      "https://th.bing.com/th/id/R.8359b42bbcae99fc2473fb9bdb6e1ae0?rik=FdiaSrRDfG9mAQ&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    Name: "Pencil",
    Price: 1000,
    Description: "black",
    image: (
      <img
        src="https://th.bing.com/th/id/R.8359b42bbcae99fc2473fb9bdb6e1ae0?rik=FdiaSrRDfG9mAQ&pid=ImgRaw&r=0"
        width={100}
        height={100}
        alt="Tommy"
      />
    ),
  },
  {
    id: 3,
    Name: "shirt",
    Price: 4000,
    Discription: "Vintage",
    image: (
      <img
        src="https://th.bing.com/th/id/R.8359b42bbcae99fc2473fb9bdb6e1ae0?rik=FdiaSrRDfG9mAQ&pid=ImgRaw&r=0"
        width={100}
        height={100}
        alt="Tommy"
      />
    ),
  },
];
// ·        Create a file called product.js with a json object of a
//product’s name, price, description, and a path or URL to an image. (Don’t forget to export the json object)

export default PRODUCT;
