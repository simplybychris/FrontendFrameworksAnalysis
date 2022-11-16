import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PersonType } from '../utils/types';

import { peopleData } from './../utils/data';

function Home() {
  const [people, setPeople] = useState<PersonType[]>(peopleData);

  const title = 'React 18.2.0';

  return (
    <div className="container py-5">
      <div className="p-5 mb-5 bg-dark rounded-3 d-flex flex-column align-items-center">
        <h1 className="pb-5 text-white">{title}</h1>
        <p>
          <button className="btn btn-primary mx-2">Create 1.000 rows</button>
          <button className="btn btn-primary mx-2">Update every 5th row</button>
          <button className="btn btn-primary mx-2">Append 1.000 rows</button>
        </p>
        <p className="pb-5">
          <button className="btn btn-primary mx-2">Create 10.000 rows</button>
          <button className="btn btn-primary mx-2">Remove every 5th row</button>
          <button className="btn btn-primary mx-2">
            Clear
          </button>
        </p>
        <Link className="btn btn-secondary mx-2 link" to="/next-page">
          Go to 2nd page
        </Link>
      </div>

      <div className="bg-dark rounded-3">
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {people.map(({ id, name }) => (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
