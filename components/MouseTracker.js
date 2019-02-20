import Layout from "../components/Layout";

class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = event => {
    const vegetaImg = document.querySelector(".mouseCont img");
    const componentText = document.querySelector(".mouseCont p");
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
    if (this.state.x *7 > 9000) {
      vegetaImg.style.display = "block";
      componentText.style.display = "none";
    } else {
      vegetaImg.style.display = "none";
      componentText.style.display = "block";
    }
  };

  render() {
    return (
      <Layout title="Move the mouse around!">
        <div className="mouseCont" onMouseMove={this.handleMouseMove}>
          <img
            src="/static/itover9000.png"
            alt="Vegeta"
            height="100%"
          />
          <p style={{ textAlign: "center" }}>
            The current mouse position is ({this.state.x * 7}, {this.state.y})
          </p>
        </div>
        <style global jsx>{`
          .mouseCont {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 700px;
            width: 80%;
            border: 2px solid grey;
            border-radius: 1rem;
          }
          .mouseCont img {
            display: none;
          }
        `}</style>
      </Layout>
    );
  }
}

export default MouseTracker;
