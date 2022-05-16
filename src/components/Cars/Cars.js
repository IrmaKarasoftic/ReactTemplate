import React, { Component } from "react";
import Select from "react-select";
import "./cars.css";
import { getBrands, getModels } from "./carsService";
import Loading from "../Shared/Loading";
import Button from "../Shared/Button/Button";

export default class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      allBrands: [],
      models: [],
    };
  }
  getBrands = async () => {
    const brands = await getBrands();
    this.setState({ allBrands: brands });
  };

  getModels = async (brandId) => {
    const models = await getModels(brandId);
    this.setState({ models: models });
  };

  async componentDidMount() {
    this.getBrands();
  }

  handleClick = () => {
    console.log("Clicked");
  };

  render() {
    if (!this.state.allBrands) return <Loading />;
    return (
      <>
        <Select options={this.state.allBrands} onChange={this.getModels} />
        {this.state.models.length > 0 && (
          <Select options={this.state.models} onChange={this.getModels} />
        )}
        <Button
          label={"Default"}
          onClick={() => handleClick()}
          className="btn btn-default"
        ></Button>
        <Button
          label={"Primary"}
          onClick={() => handleClick()}
          className="btn btn-primary"
        ></Button>
        <Button
          label={"Success"}
          onClick={() => handleClick()}
          className="btn btn-success"
        ></Button>
        <Button
          label={"Info"}
          onClick={() => handleClick()}
          className="btn btn-info"
        ></Button>
        <Button
          label={"Danger"}
          onClick={() => handleClick()}
          className="btn btn-danger"
        ></Button>
      </>
    );
  }
}
