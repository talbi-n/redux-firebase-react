import React, { Component } from 'react';
export default class CreateProject extends Component {
  state = { title: '', content: '' };
  handleChange = (e) => {
    //if id == password we chnage the password state else email
    this.setState({ [e.target.id]: e.target.value }); //"email":email value || "password": password
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create New Project </h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type={'text'} id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              className="materialize-textarea"
              name="content"
              id="content"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn  pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
