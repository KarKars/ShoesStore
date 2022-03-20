import { useState, useEffect } from "react";

import Nav from "./components/Nav";
import ItemSold from "./components/itemSold";

function App() {
  const [sell, setSell] = useState({ brand: "", model: "", price: "", size: "" });
  const [itemID, setItemID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  //get data from localStorage

  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("list");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  //trigger the rerender after each list changment
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const clearItems = () => {
    localStorage.clear();
    setList([]);
  };
  const changeForm = (brand = "", model = "", price = "", size = "") => {
    setSell({ brand, model, price, size });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    setSell({ ...sell, [name]: value });
  };

  const editItem = (id) => {
    const specifiedItem = list.find((item) => item.id === id);
    setSell({
      brand: specifiedItem.brand,
      model: specifiedItem.model,
      size: specifiedItem.size,
      price: specifiedItem.price,
    });
    setItemID(id);
    setIsEditing(true);
  };

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    console.log(newList);
    setList(newList);
    changeForm();
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (sell && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === itemID) {
            return {
              ...item,
              model: sell.model,
              brand: sell.brand,
              size: sell.size,
              price: sell.price,
            };
          }
          return item;
        })
      );
      setIsEditing(false);
      setItemID(null);
      changeForm();
    } else {
      setList([...list, { id: new Date().getTime().toString(), ...sell }]);
      console.log(list);
      changeForm();
    }
  };
  return (
    <div className="App ">
      <Nav />
      <div className="Form-container ">
        <div className="title">
          <h1>New Sell</h1>
        </div>
        <div className="Form">
          <form className="main-Form">
            <div className="m-2">
              <input
                type="text"
                name="brand"
                value={sell.brand}
                onChange={handleChange}
                className="Input"
                placeholder="Brand"
              />
            </div>
            <div className="m-2">
              <input
                type="text"
                name="model"
                value={sell.model}
                onChange={handleChange}
                className="Input"
                placeholder="model"
              />
            </div>
            <div className="m-2">
              <input
                type="text"
                name="price"
                value={sell.price}
                onChange={handleChange}
                className="Input"
                placeholder="price"
              />
            </div>
            <div className="m-2">
              <input
                type="text"
                name="size"
                value={sell.size}
                onChange={handleChange}
                className="Input"
                placeholder="size"
              />
            </div>
          </form>
          <div className="space-x-3">
            {isEditing ? (
              <button className="btn-Form" onClick={handleClick}>
                Edit
              </button>
            ) : (
              <button className="btn-Form" onClick={handleClick}>
                Submit
              </button>
            )}
            {list.length > 10 && (
              <button className="btn-Form" onClick={clearItems}>
                clear Items
              </button>
            )}
          </div>
          {list.length > 0 && (
            <div className="List">
              <div className="List-title-container">
                <h1 className="List-header">Brand</h1>
                <h2 className="List-header">model</h2>
                <h1 className="List-header">price</h1>
                <h1 className="List-header">size</h1>
              </div>
              {list.length > 0 &&
                list.map((item) => {
                  return (
                    <ItemSold
                      key={item.id}
                      item={item}
                      deleteItem={deleteItem}
                      editItem={editItem}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
