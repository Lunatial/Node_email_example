import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";

import dynamic from "next/dynamic";

const DynamicReactQuillWithNoSSR = dynamic(
  () => import("../components/ReactQuill"),
  {
    ssr: false
  }
);

class LoginForm extends React.Component {
  state = {
    email: "",
    subject: "",
    texteditor: "",
    error: "",
    isLoading: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onHandleChange = e => {
    this.setState({ texteditor: e });
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
        texteditor: "",
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
    const { email, subject, texteditor, error, isLoading } = this.state;

    return (
      <Layout title="Email form">
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
                <DynamicReactQuillWithNoSSR
                  onHandleChange={this.onHandleChange}
                  texteditor={texteditor}
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
          <style jsx>{`
            form {
              margin: 2rem;
              padding: 1rem;
              border: 2px solid lightgrey;
              border-radius: 5px;
            }
          `}</style>
          <style global jsx>{`
            .ql-editor {
              background-color: white;
            }
            .ql-toolbar {
              display: block;
              background-color: #eaecec;
              border-top-left-radius: 0.25rem;
              border-top-right-radius: 0.25rem;
            }
            .ql-container {
              border-bottom-left-radius: 0.25rem;
              border-bottom-right-radius: 0.25rem;
              background: #fefcfc;
            }

            .ql-editor {
              border-bottom-left-radius: 0.25rem;
              border-bottom-right-radius: 0.25rem;
            }
            .ql-editor {
              min-height: 10em;
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}

export default LoginForm;
