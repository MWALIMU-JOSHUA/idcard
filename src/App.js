import React, { useState } from 'react';
import './App.css';

const IdCard = ({ fullName, age, idNumber, clubName, photo, clubLogo, qrCode }) => {
  return (
    <div className="id-card">
      <h2>{clubName} Club ID Card</h2>
      <div className="images-container">
        <img src={photo} alt="Club Member" className="image" />
        <div className="logo-frame">
          <img src={clubLogo} alt="Club Logo" className="logo-image" />
        </div>
        <img src={qrCode} alt="QR Code" className="qr-code" />
      </div>
      <div className="info">
        <p><strong>Name:</strong> <span className="dotted">{fullName}</span></p>
        <p><strong>Age:</strong> <span className="dotted">{age}</span></p>
        <p><strong>ID Number:</strong> <span className="dotted">{idNumber}</span></p>
        <p><strong>Club Name:</strong> <span className="dotted">{clubName}</span></p>
      </div>
      <footer>
        <div>Sponsored by</div>
        <div>Hallmark Institute of Professionals</div>
      </footer>
    </div>
  );
};

const IdCardForm = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [clubName, setClubName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [clubLogo, setClubLogo] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const [showIdCard, setShowIdCard] = useState(false);

  const handlePhotoUpload = (event) => {
    setPhoto(URL.createObjectURL(event.target.files[0]));
  };

  const handleLogoUpload = (event) => {
    setClubLogo(URL.createObjectURL(event.target.files[0]));
  };

  const handleQrCodeUpload = (event) => {
    setQrCode(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowIdCard(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      {!showIdCard ? (
        <form onSubmit={handleSubmit} className="form-container">
          <label>
            Full Name:
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </label>
          <label>
            Age:
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
          </label>
          <label>
            ID Number:
            <input type="text" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} required />
          </label>
          <label>
            Club Name:
            <input type="text" value={clubName} onChange={(e) => setClubName(e.target.value)} required />
          </label>
          <label>
            Your Image:
            <input type="file" accept="image/*" onChange={handlePhotoUpload} required />
          </label>
          <label>
            Club Logo:
            <input type="file" accept="image/*" onChange={handleLogoUpload} required />
          </label>
          <label>
            QR Code:
            <input type="file" accept="image/*" onChange={handleQrCodeUpload} required />
          </label>
          <button type="submit">Generate ID Card</button>
        </form>
      ) : (
        <div>
          <IdCard 
            fullName={fullName} 
            age={age} 
            idNumber={idNumber} 
            clubName={clubName} 
            photo={photo} 
            clubLogo={clubLogo} 
            qrCode={qrCode} 
          />
          <button onClick={handlePrint}>Print ID Card</button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Club ID Card Generator</h1>
      <IdCardForm />
    </div>
  );
};

export default App;
