import { useState } from "react";
import Header, { SearchForm } from "./Header";
import Main, { Table } from "./Main";
import PRODUCTS from "./data/products";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [inputCheckbox, setInputCheckbox] = useState(false);

  return (
    <>
      <Header>
        <SearchForm
          inputText={inputText}
          onInputText={setInputText}
          inputCheckbox={inputCheckbox}
          onInputCheckbox={setInputCheckbox}
        />
      </Header>
      <Main>
        <Table
          products={PRODUCTS}
          inputText={inputText}
          inputCheckbox={inputCheckbox}
        />
      </Main>
    </>
  );
}
