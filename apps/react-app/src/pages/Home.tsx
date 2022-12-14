import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
interface DataType {
  id: number;
  name: string;
}

let id: number = 1;

function Home() {
  const [data, setData] = useState<DataType[]>([]);

  const title = 'React 18.2.0';

  function random(max: number) {
    return Math.round(Math.random() * 1000) % max;
  }

  const generateData = useCallback((count: number = 1000): DataType[] => {
    let adjectives = [ 'elegant', 'coherent', 'comprehensive', 'like', 'ragged', 'organic', 'ambiguous', 'wiry', 'clever', 'violet'];
    let items = [ 'toothpick', 'phone', 'computer', 'hat', 'socks', 'car', 'shirt', 'rock', 'pad', 'paper'];
    const data: DataType[] = [];

    for (let i = 0; i < count; i++) {
      data.push({
        id,
        name:
          adjectives[random(adjectives.length)] +
          ' ' +
          items[random(items.length)],
      });
      id++;
    }
    return data;
  }, []);

  function append() {
    let dataToUpdate = [...data];
    for (let i = 0; i < 10; i++) {
      const id = random(data.length);
      dataToUpdate.splice(id, 0, ...generateData(100));
    }
    setData(dataToUpdate);
  }

  function update() {
    let dataToUpdate = [...data];
    for (let i = 0; i < dataToUpdate.length; i += 5) {
      dataToUpdate[i].name = 'updated ' + dataToUpdate[i].name;
    }
    setData(dataToUpdate);
  }

  function createThousandRows() {
    setData([...data.concat(generateData(1000))]);
  }

  function createTenThousandRows() {
    setData([...data.concat(generateData(10_000))]);
  }

  function remove() {
    let dataToUpdate = [...data];
    for (let i = 0; i < dataToUpdate.length; i += 5) {
      dataToUpdate.splice(i, 1);
    }
    setData(dataToUpdate);
  }

  function clear() {
    setData([]);
  }

  useEffect(() => {
    return () => {
      setData(generateData(100));
    };
  }, [generateData]);

  return (
  <Router>
    <div className="container py-5">
      <div className="p-5 mb-5 bg-dark rounded-3 d-flex flex-column align-items-center">
        <h1 className="pb-5 text-white">{title}</h1>
        <p>
          <button className="btn btn-primary mx-2 createThousandRows" onClick={createThousandRows}>
            Create 1.000 rows
          </button>
          <button className="btn btn-primary mx-2 update" onClick={update}>
            Update every 5th row
          </button>
          <button className="btn btn-primary mx-2 append" onClick={append}>
            Append 1.000 rows
          </button>
        </p>
        <p className="pb-5">
          <button
            className="btn btn-primary mx-2 createTenThousandRows"
            onClick={createTenThousandRows}
          >
            Create 10.000 rows
          </button>
          <button className="btn btn-primary mx-2 remove" onClick={remove}>
            Remove every 5th row
          </button>
          <button className="btn btn-primary mx-2 clear" onClick={clear}>
            Clear
          </button>
        </p>
        <Link className="btn btn-secondary mx-2 link" to="/next-page">
          Go to 2nd page
        </Link>
      </div>

      <p>Rows count: {data.length}</p>

      <div className="bg-dark rounded-3">
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.map(({ id, name }) => (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Router>
  );
}

export default Home;
