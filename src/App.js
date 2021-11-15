import "./styles.css";

export default function App() {
  let hundred = [];
  for (let i = 1; i <= 100; i++) {
    hundred.push(i);
  }
  let x = hundred.map(function (num) {
    return Math.sqrt(num);
  });
  let y = hundred.map(Math.sqrt);

  let names = [["Jared", "Hirsch"]];

  let fullName = names.map(function (arr) {
    return arr[0] + arr[1];
  });
  return (
    <div className="App">
      <li> {hundred} </li>
      <li> {x} </li>
      <li> {y} </li>
      <li> {fullName} </li>
    </div>
  );
}
