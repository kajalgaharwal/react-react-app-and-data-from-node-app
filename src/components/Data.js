import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const divStyle = {
  width: '18rem'
};

export default function Data() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:3300/index')
      .then(({ data }) => setUsers(data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3 className='headline'>Women</h3>

      {users.map(user => {
        return (
          <div key={user.id} className='card'>
            <img
              src={`http://localhost:3300/${user.image}`}
              className='card-img-top'
              alt='...'
            />
            <div className='card-body'>
              <h5 className='card-title'>{user.name}</h5>
              <p className='card-text'>{user.email}</p>
            </div>
          </div>
        );
      })}
      {/* <div className='women'>
        <div class='card' style={divStyle}>
          <img
            src='https://picsum.photos/seed/picsum/200/300'
            class='card-img-top'
            alt='...'
          />
          <div class='card-body'>
            <h5 class='card-title'>Card title</h5>
            <p class='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href='/' class='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
        <div class='card' style={divStyle}>
          <img
            src='https://picsum.photos/seed/picsum/200/300'
            class='card-img-top'
            alt='...'
          />
          <div class='card-body'>
            <h5 class='card-title'>Card title</h5>
            <p class='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href='/' class='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <h3 className='headline'>Men</h3>
      <div className='men'>
        <div class='card' style={divStyle}>
          <img
            src='https://picsum.photos/seed/picsum/200/300'
            class='card-img-top'
            alt='...'
          />
          <div class='card-body'>
            <h5 class='card-title'>Card title</h5>
            <p class='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href='/' class='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
        <div class='card' style={divStyle}>
          <img
            src='https://picsum.photos/seed/picsum/200/300'
            class='card-img-top'
            alt='...'
          />
          <div class='card-body'>
            <h5 class='card-title'>Card title</h5>
            <p class='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href='/' class='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}
