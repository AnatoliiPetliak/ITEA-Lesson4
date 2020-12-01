import Chart from "./Task1/Chart";
import Helper from "./Task2/helper";
import DemoUseEffect from "./Task4/DemoUseEffect";
import TableWrapper from "./Task3/TableWrapper";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Chart />
      <hr size="4" color="black" />
      <Helper />
      <hr size="4" color="black" />
      <TableWrapper />

      <hr size="4" color="black" />

      <hr size="4" color="black" />

      <div className="listContainer">
        <div>
          <DemoUseEffect
            url="https://jsonplaceholder.typicode.com/photos?_limit=5"
            listTittle="PHOTOS"
            list="title"
          />
        </div>
        <div>
          <DemoUseEffect
            url="https://jsonplaceholder.typicode.com/todos?_limit=5"
            listTittle="TODOS"
            list="title"
          />
        </div>
        <div>
          <DemoUseEffect
            url="https://jsonplaceholder.typicode.com/albums?_limit=5"
            listTittle="ALBUMS"
            list="title"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
