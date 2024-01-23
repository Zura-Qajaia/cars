import { useState } from "react";

const initialDogs = [
  {
    id: 0,
    name: "retriever-curly",
    year: 2,
    price: 3000,
    image: "https://images.dog.ceo//breeds//retriever-curly//n02099429_869.jpg",
  },
  {
    id: 1,
    name: "wolfhound-irish",
    year: 3,
    price: 9000,
    image: "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1002.jpg",
  },
  {
    id: 2,
    name: "pomeranian",
    year: 5,
    price: 2000,
    image: "https://images.dog.ceo//breeds//pomeranian//n02112018_8745.jpg",
  },
  {
    id: 3,
    name: "terrier-tibetan",
    year: 8,
    price: 7000,
    image:
      "https://images.dog.ceo//breeds//terrier-tibetan//n02097474_7374.jpg",
  },
];

export default function App() {
  const [dogs, setDogs] = useState(initialDogs);
  return (
    <div className="car">
      <Logo />
      <CarList dogs={dogs} setDogs={setDogs} />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <h1>🐕 Dog Universe</h1>
    </div>
  );
}

function CarList({ dogs, setDogs }) {
  const [selectedDog, setSelectedDog] = useState(null);
  const [isadd, setIsAdd] = useState(false);
  const [breed, setBreed] = useState("");
  const [price, setPrice] = useState("");

  function HandleSelection(dog) {
    setSelectedDog(dog);
  }

  function handleAdd() {
    setIsAdd(!isadd);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDogs([
      ...dogs,
      {
        name: breed,
        price: price,
        image:
          "https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_3325.jpg",
      },
    ]);
    setBreed("");
    setPrice("");
  }

  function handleAdd1() {
    return (
      <form className="form1" onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              type="text"
              placeholder="breed"
              className="form"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
            <label className="breed">breed</label>
          </li>
          <li>
            <input
              type="text"
              placeholder="price"
              className="form"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label className="price">price</label>
          </li>
          <li>
            <button type="submit" className="button">
              Submit
            </button>
          </li>
        </ul>
      </form>
    );
  }

  return (
    <>
      <div className="carlist">
        <ul>
          {dogs.map((dog) => (
            <li className="prfilio" key={dog.id}>
              <img className="photo" src={dog.image} alt="dog" />
              <span className="text">
                breed: {dog.name}, price: {dog.price}
              </span>
              <p>
                <button className="button" onClick={() => HandleSelection(dog)}>
                  Select
                </button>
              </p>
            </li>
          ))}
        </ul>
        {selectedDog && (
          <div className="form1">
            {/* Display information about the selected dog here */}
            <p>Selected Dog: {selectedDog.name}</p>
          </div>
        )}
      </div>
      <button className="button1" onClick={() => handleAdd()}>
        Add
      </button>
      {isadd && handleAdd1()}
    </>
  );
}
