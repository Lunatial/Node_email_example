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

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ error: "", isLoading: true });

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(this.state)
      });

      this.setState({
        email: "",
        subject: "",
        textarea: "",
        error: "",
        isLoading: false
      });
    } catch (err) {
      this.showError(err);
    }
  };

  showError = err => {
    console.error(err);
    const error = (err.response && err.response.data) || err.message;
    this.setState({ error, isLoading: false });
  };

  render() {
    const { email, subject, textarea, error, isLoading } = this.state;

    return (
      <div className="container">
        <div className="col-12">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                className="form-control"
                type="text"
                name="subject"
                value={subject}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">Body</label>
              <textarea
                className="form-control"
                name="textarea"
                rows="3"
                value={textarea}
                onChange={this.handleChange}
              />
            </div>
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <button
                className="btn btn-primary"
                disabled={isLoading}
                type="submit"
              >
                Submit
              </button>
            )}
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
