import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Catalogue from "./components/Catalogue";
import data from "./data.json";

function App() {
  const [search, setSearch] = useState("");
  const [accessData, setAccessData] = useState(data);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const inputChange = (e) => {
    setSearch(e.target.value);
  };

  //   const filterHandler = data.filter((searchItem) => {
  //     if(search == '') {
  //         return null;
  //     } else if(searchItem.car.toLocaleLowerCase().includes(search.toLocaleLowerCase()))  {
  //         return (
  //           <div className="searched">
  //             {searchItem}
  //           </div>
  //         )
  //     }
  // }).map((val, id) => {
  //     return (
  //     <div className="ItemSearch" key={id}>
  //         {val.car}
  //         {val.model}
  //         {val.model_year}
  //         {val.color}
  //         {val.address}
  //     </div>
  //     )
  // })

  return (
    <div className="App">
      <Header
        inputChange={inputChange}
        addToCart={addToCart}
        search={search}
        cart={cart}
        // searchHandler={filterHandler}
      />
      <div className="items">
    {data.filter((searchItem) => {
                    if(search == '') {
                        return null;
                    } else if(searchItem.car.toLocaleLowerCase().includes(search.toLocaleLowerCase()))  {
                        return (
                          <div className="searched">
                            {searchItem}
                          </div>
                        )
                    } 
                }).map((val, id) => {
                    return (
                    <div className="ItemSearch" key={id}>
                        {val.car}
                        {val.model}
                        {val.model_year}
                        {val.color}
                        {val.address}
                    </div>
                    )
                })}
                </div>

      <div className="container">
        <Catalogue accessData={accessData} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
