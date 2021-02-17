import React from "react";

const TransactionList = ({ addItem, handleInput, currentItem }) => {
  return (
    <div>
      <form onSubmit={addItem}>
        <input
          placeholder="Transaction"
          value={currentItem.price}
          onChange={handleInput}
        />
        <button>Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionList;
