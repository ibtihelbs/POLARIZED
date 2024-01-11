import axios from "axios";
import React, { Component } from "react";

export default class ProductFetching extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        "https://polarized-store-api.onrender.com/api/products"
      );
      const data = res.data;
      console.log(data);

      this.setState({ data: data });

      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data.map((v) => (
          <h1 key={v._id}>{v.title}</h1>
        ))}
      </div>
    );
  }
}
