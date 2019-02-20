import Layout from "../components/Layout";

class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <Layout title="Move the mouse around!">
        <div
          style={{
            minHeight: "700px",
            width: "80%",
            border: "2px solid grey",
            borderRadius: "1rem"
          }}
          onMouseMove={this.handleMouseMove}
        >
          <p style={{ textAlign: "center" }}>
            The current mouse position is ({this.state.x}, {this.state.y})
          </p>
        </div>
      </Layout>
    );
  }
}

export default MouseTracker;
