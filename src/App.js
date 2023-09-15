import React, {useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import NavBar from './comps/NavBar';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <NavBar/>
      {/* <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>} */}
    </div>
  );
}

export default App;
