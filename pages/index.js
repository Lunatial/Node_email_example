class LoginForm extends React.Component {
  state = {
    email: "",
    subject: "",
    textarea: "",
    error: "",
    isLoading: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    
    this.setState({ error: "", isLoading: true });

    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(result => result.json())
      .then(info => {
        console.log(info);
      })
      .then(() => this.setState({ error: "", isLoading: false }))
      .catch(err => this.setState({ error: err}))
  };

  showError = err => {
    console.error(err);
    const error = (err.response && err.response.data) || err.message;
    this.setState({ error, isLoading: false });
  };

  render() {
    const { email, subject, textarea, error, isLoading } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            placeholder="subject"
            value={subject}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <textarea
            name="textarea"
            value={textarea}
            onChange={this.handleChange}
          />
        </div>
        <button disabled={isLoading} type="submit">
          {isLoading ? "Sending" : "Submit"}
        </button>
        {error && <div>{error}</div>}
      </form>
    );
  }
}

export default LoginForm;