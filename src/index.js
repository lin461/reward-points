import React from "react";
import ReactDOM from "react-dom";
import TransactionList from "./TransactionList";
import TransactionItems from "./TransactionItems";
import TotalRewards from "./TotalRewards";
import "./styles.css";

class App extends React.Component {
  state = {
    items: [],
    currentItem: { price: "", key: "" },
    total: 0
  };

  handleInput = (event) => {
    const price = event.target.value;
    const currentItem = { price, key: Date.now() };
    this.setState({ currentItem });
  };

  addItem = (event) => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.price.trim() !== "" && !isNaN(newItem.price)) {
      const items = [...this.state.items, newItem];
      this.setState({
        items,
        currentItem: { price: "", key: "" }
      });
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({ items: filteredItems });
  };

  getTotalRewards = () => {
    let total = 0;
    if (this.state.items.length > 0) {
      for (let i = 0; i < this.state.items.length; i++) {
        total += this.calculateRewards(this.state.items[i].price);
      }
    }
    this.setState({ total });
  };

  calculateRewards = (price) => {
    if (price >= 50 && price <= 100) {
      return price - 50;
    } else if (price > 100) {
      return 2 * (price - 100) + 50;
    }
    return 0;
  };

  render() {
    return (
      <div>
        <TransactionList
          addItem={this.addItem}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TransactionItems
          items={this.state.items}
          deleteItem={this.deleteItem}
        />
        <TotalRewards
          total={this.state.total}
          getTotalRewards={this.getTotalRewards}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
