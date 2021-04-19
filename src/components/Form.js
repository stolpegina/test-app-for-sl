import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        title: "",
        body: "",
      };
    }
  
    onSubmit(e) {
      e.preventDefault();
  
      this.props.addPost(this.state);
      this.setState({
        title: "",
        body: "",
      });
    }
  
    render() {
      return (
        <form onSubmit={(e) => this.onSubmit(e)}>
          <h2>Add new post</h2>
          <label>
            Title:{" "}
            <input
              type="text"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />{" "}
          </label>
          <br />
          <label>
            Body:{" "}
            <textarea
              type="text"
              value={this.state.body}
              onChange={(e) => this.setState({ body: e.target.value })}
            />{" "}
          </label>
          <br />
          <button>SUBMIT</button>
        </form>
      );
    }
  }
  
  export default Form;