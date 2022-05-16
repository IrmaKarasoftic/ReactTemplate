import React from "react";
import { Component } from "react";
import { getValues } from "../../utils/dataService";
import Loading from "../Shared/Loading";
import Button from "../Shared/Button";
import "./vinDecoder.css";

class VinDecoder extends Component {
  constructor(props) {
    super(props);
    this.state = { vinNumber: "", persons: [], loading: false };
  }

  onChange = (event) => {
    this.setState({ vinNumber: event.target.value });
  };

  checkVin = async () => {
    this.setState({ loading: true });
    let personsGet = await getValues();
    this.setState({ loading: false, persons: personsGet });
  };

  render() {
    return (
      <>
        <label>
          Name:
          <input
            type="text"
            value={this.state.vinNumber}
            onChange={this.onChange}
          />
        </label>
        <Button
          label={"Primary"}
          onClick={this.checkVin}
          className="btn btn-primary"
          type="button"
        />

        {!this.state.loading ? (
          <ul>
            {this.state.persons.map((person) => (
              <li key={person.id}>{person.name}</li>
            ))}
          </ul>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default VinDecoder;
