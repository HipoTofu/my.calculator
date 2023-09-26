import './App.css';
function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}
function App() {
  return (
    <section>
      <h1>
        Welcome to my App
      </h1>
    <calcContainer>
      <displayContainer>
        <display>
          0
        </display>
      </displayContainer>
      <row1>
          <AlertButton message="7">7</AlertButton>
          <AlertButton message="8">8</AlertButton>
          <AlertButton message="9">9</AlertButton>
          <AlertButton message="+">+</AlertButton>
        </row1>

        <row2>
        <AlertButton message="4">4</AlertButton>
        <AlertButton message="5">5</AlertButton>
        <AlertButton message="6">6</AlertButton>
        <AlertButton message="-">-</AlertButton>
        </row2>

        <row3>
        <AlertButton message="1">1</AlertButton>
        <AlertButton message="2">2</AlertButton>
        <AlertButton message="3">3</AlertButton>
        <AlertButton message="*">*</AlertButton>
        </row3>

        <row4>
        <AlertButton message="C">C</AlertButton>
        <AlertButton message="0">0</AlertButton>
        <AlertButton message="=">=</AlertButton>
        <AlertButton message="÷">÷</AlertButton>
        </row4>

    </calcContainer>

    </section>


    

  );
}

export default App;



