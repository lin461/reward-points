import React from "react";

const TransactionItems = ({ items, deleteItem }) => {
  const list = items.map((item) => (
    <div key={item.key}>
      <p style={{ display: "inline-block", margin: 10 }}>{item.price}</p>
      <button onClick={() => deleteItem(item.key)}>X</button>
    </div>
  ));
  return <div>{list}</div>;
};

export default TransactionItems;
