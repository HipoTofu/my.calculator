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
          <numbers><AlertButton message="7">7</AlertButton></numbers>
          <numbers><AlertButton message="8">8</AlertButton></numbers>
          <numbers><AlertButton message="9">9</AlertButton></numbers>
          <numbers><AlertButton message="+">+</AlertButton></numbers>

        </row1>

        <row2>
        <numbers><AlertButton message="4">4</AlertButton></numbers>
        <numbers><AlertButton message="5">5</AlertButton></numbers>
        <numbers><AlertButton message="6">6</AlertButton></numbers>
        <numbers><AlertButton message="-">-</AlertButton></numbers>
        </row2>

        <row3>
        <numbers><AlertButton message="1">1</AlertButton></numbers>
        <numbers><AlertButton message="2">2</AlertButton></numbers>
        <numbers><AlertButton message="3">3</AlertButton></numbers>
        <numbers><AlertButton message="*">*</AlertButton></numbers>
        </row3>

        <row4>
        <numbers><AlertButton message="C">C</AlertButton></numbers>
        <numbers><AlertButton message="0">0</AlertButton></numbers>
        <numbers><AlertButton message="=">=</AlertButton></numbers>
        <numbers><AlertButton message="÷">÷</AlertButton></numbers>
        </row4>

    </calcContainer>

    </section>


    

  );
}

export default App;



