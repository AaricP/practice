import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/home')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.error('Error fetching data', err));
  }, [submitted]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {data.map((emp) => (
        <div key={emp._id}>
          <h1>
            {emp
              ? `Hello, my name is ${emp.firstName} ${emp.lastName}`
              : 'Loading...'}
          </h1>
          <img style={{ width: '100px' }} src={emp.image} alt={emp.firstName} />
        </div>
      ))}
      <form action="http://localhost:3000/home" method="POST">
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" name="firstName" type="text" />
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" name="lastName" type="text" />
        <label htmlFor="image">Image URL:</label>
        <input id="image" name="image" type="text" />
        <button
          onClick={(submitted) => {
            setSubmitted(!submitted);
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
