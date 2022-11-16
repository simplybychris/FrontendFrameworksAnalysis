import { Link } from 'react-router-dom';

function NextPage() {
  const title = 'React 18.2.0';

  return (
    <div className="container py-5">
      <div className="p-5 mb-5 bg-dark rounded-3 d-flex flex-column align-items-center">
        <h1 className="pb-5 text-white">{title}</h1>
        <Link className="btn btn-secondary mx-2 link" to="/home">
          Go to home page
        </Link>
      </div>
    </div>
  );
}

export default NextPage;
