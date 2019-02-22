import Layout from "../components/Layout";

// const ListItem = props => <li>{props.text}</li>;
// const List = props => (
//   <ul>
//     {props.data.map(i => (
//       <ListItem key={i} text={i} />
//     ))}
//   </ul>
// );

// const TestList = () => (
//   <Layout title="Test">
//     <List data={["Hello", "World"]} />
//   </Layout>
// );

// export default TestList;

const List = props => <ul>{props.children}</ul>;
const HeaderListItem = props => (
  <li style={{ background: "red" }}>{props.text}</li>
);
const ListItem = props => <li>{props.text}</li>;
const data = ["asd", "qwe", "íyx"];

const Random = props => props.render(Math.random());
const Text = props => <p>{props.children}</p>;

const TestList = () => (
  <Layout title="Test">
    <List>
      <HeaderListItem text="Header!" />
      {data.map((i, index) => (
        <ListItem key={index} text={i} />
      ))}
    </List>
    <hr />
    <Random render={number => <Text>{number}</Text>} />
  </Layout>
);

export default TestList;
