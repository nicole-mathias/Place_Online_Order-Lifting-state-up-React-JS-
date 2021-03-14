import React from "react";
import "./styles.css";

class Quantity extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
  }

  handleChange(event) {
    this.props.onQuantityChange(event.target.value);
  }

  handleProduct(event) {
    this.props.onProductChange(event.target.value);
  }

  render() {
    return (
      <div className="border">
        <h4>Place order</h4>

        <label>
          Product:
          <select onChange={this.handleProduct} product={this.props.product}>
            <option>Product 1</option>
            <option>Product 2</option>
            <option>Product 3</option>
          </select>
        </label>
        <p>
          <label>
            Quantity:
            <input
              type="number"
              onChange={this.handleChange}
              value={this.props.quantity}
            />
          </label>
        </p>
      </div>
    );
  }
}

class Address extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onAddressChange(event.target.value);
  }

  render() {
    return (
      <div className="border">
        <h4>Enter Address</h4>
        <label>
          Address:
          <input onChange={this.handleChange} value={this.props.address} />
        </label>
      </div>
    );
  }
}

class OrderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onQuantityChange(event.target.value);
  }

  render() {
    return (
      <div className="border">
        <h4>Order Infomation:</h4>

        <label>Product:{this.props.product}</label>

        <p>
          <label>
            Quantity:
            <input
              type="number"
              onChange={this.handleChange}
              value={this.props.quantity}
            />
          </label>
        </p>

        <p>
          <label>Address: {this.props.address}</label>
        </p>

        <button>Place Order</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      quantity: "",
      product: ""
    };

    this.handleAddress = this.handleAddress.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
  }

  handleAddress(val) {
    this.setState({
      address: val
    });
  }

  handleQuantity(val) {
    this.setState({
      quantity: val
    });
  }

  handleProduct(val) {
    this.setState({
      product: val
    });
  }

  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}> Online Order</h3>
        <Quantity
          product={this.setState.product}
          onProductChange={this.handleProduct}
          quantity={this.state.quantity}
          onQuantityChange={this.handleQuantity}
        />

        <Address
          onAddressChange={this.handleAddress}
          address={this.state.address}
        />

        <OrderComponent
          product={this.state.product}
          address={this.state.address}
          quantity={this.state.quantity}
          onQuantityChange={this.handleQuantity}
        />
      </div>
    );
  }
}

export default App;
