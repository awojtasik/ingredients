import React, { useState } from "react";
import IngridientsList from "./ingridientsList";
import { Button, Input, Container, Heading } from "@chakra-ui/react";

function App() {
  const [ingridientData, setIngridientData] = useState(null);
  const [query, setQueries] = useState(0);
  const [savedSearch, setRememberSearch] = useState([]);

  function getIngridients() {
    fetch(
      `https://api.spoonacular.com/food/ingredients/search?apiKey=80f84546d384481a8ec8be4bf9f3f940&query=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIngridientData(data);
        setRememberSearch([...setRememberSearch, query]);
      })
      .catch(() => {
        console.log("error");
      });
  }
  function handleChange(e) {
    setQueries(e.target.value);
  }
  return (
    <Container>
      <div className="App">
        <section className="controls">
          <Heading className="header">ingredient finder</Heading>
          <Input
            type="text"
            placeholder="food ingredients, use only english"
            onChange={handleChange}
          />
          <Button
            className="button"
            colorScheme="blue"
            onClick={getIngridients}
          >
            Get Ingredients
          </Button>
          <p>
            {savedSearch.slice(-2).map((savedElement) => (
              <div key={savedElement.id}>{savedElement}</div>
            ))}
          </p>
        </section>
        {ingridientData && <IngridientsList ingridientData={ingridientData} />}
      </div>
    </Container>
  );
}

export default App;
