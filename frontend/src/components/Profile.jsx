import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  const users = [
    {
      name: 'Ananda Krisna',
      age: 20,
      rule: 'Fullstack Developer',
      imageUrl: '/src/assets/nanda.jpeg',
      altText: 'Profile Picture 1',
      description: '"Hidup ini seperti kolam renang, kadang ada yang renang, kadang ada yang nyemplung. Yang penting, tetap mengapung!."',
    },
    {
      name: 'Krisna Yoga',
      age: 21,
      rule: 'Fullstack Developer',
      imageUrl: '/src/assets/kinan.jpeg',
      altText: 'Profile Picture 2',
      description: '"Pernah gak sih makan gorengan 3 ngakunya gak cemburu padahal nyesek banget?."',
    },
    {
      name: 'Khresna Adi',
      age: 21,
      rule: 'Fullstack Developer',
      imageUrl: '/src/assets/khresna.jpeg',
      altText: 'Profile Picture 3',
      description: '"Kalau orang lain bisa, kenapa harus saya. Kalau orang lain gak bisa, apalagi saya."',
    },
  ];

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ marginLeft: '100px'}}>
      <div className="row">
        {users.map((user, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card" style={{ WebkitInitialLetterheight:'100px', paddingTop: '30px', height:'500px'}}>
              <img src={user.imageUrl} alt={user.altText} className="card-img-top rounded-circle" style={{ width: '250px', height: '250px', margin: 'auto' }} />
              <div className="card-body text-center">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{`Age: ${user.age}`}</p>
                <p className="card-text">{`${user.rule}`}</p>
                <p className="card-text">{user.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
