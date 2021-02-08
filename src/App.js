import "./styles.css";
const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

export default function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Hello CodeSandbox</h1>
      <h1 style={mystyle}>Hello CodeSandbox</h1>
      <p
        style={{
          backgroundColor: "gray",
          color: "white",
          fontFamily: "verdana",
          padding: "10px",
          textAlign: "left"
        }}
      >
        The quick brown fox jumps over the lazy dog The quick brown fox jumps
        over the lazy dog The quick brown fox jumps over the lazy dog The quick
        brown fox jumps over the lazy dog The quick brown fox jumps over the
        lazy dog
      </p>

      <p
        style={{
          backgroundColor: "gray",
          color: "white",
          fontFamily: "verdana",
          padding: "10px",
          textAlign: "left"
        }}
      >
        The quick brown fox jumps over the lazy dog The quick brown fox jumps
        over the lazy dog The quick brown fox jumps over the lazy dog The quick
        brown fox jumps over the lazy dog The quick brown fox jumps over the
        lazy dog
      </p>
    </div>
  );
}
