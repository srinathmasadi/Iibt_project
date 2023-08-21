import React,{useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { PropertyService, uploadImageService } from "../../services";

const Admin = ({openModal,setOpenModal}) => {
  const {userData} = useSelector(
    state => state.generalState
  );
  const [username] = useState(userData.data.username)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [image, setImage] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [rent, setRent] = useState('')
  // const [isLoading, setIsLoading] = useState(false);

  const convertBase64 = (file)=>{
      return new Promise((resolve, reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = ()=>{
          resolve(fileReader.result);
        }
        fileReader.onerror = (error) =>{
          reject(error)
        }
      })
    }

    const uploadImage = async (event) =>{
      try {
        const file = event.target.files[0];
      const base64 = await convertBase64(file);
      const response = await uploadImageService.uploadImage(base64)
      console.log("Image data",response)
      if(response.status){
        setImage(response.data);
        alert("Image uploaded Successfully");
      } else{
        alert("Upload size exceed");
      }
      } catch (error) {
        console.log('Cannot upload image', error)
      }
    }

    const uploadPropertyData = async()=>{
      let property = {
        name,address,rent,price,location,image,username
      }
      // setIsLoading(true)
      try {
        const response = await PropertyService.addProperty(property)
        if(response.status){
          alert(response.message)
        }
      } catch (error) {
        console.log("Error in adding property data",error)
      }
    }

    const handleName = (e)=>{
      setName(e.target.value)
    }
    const handleAddress = (e)=>{
      setAddress(e.target.value)
    }
  
    const handleLocation = (e)=>{
      setLocation(e.target.value)
    }
    const handlePrice = (e)=>{
      setPrice(e.target.value)
    }
    const handleRent = (e)=>{
      setRent(e.target.value)
    }
    
  return (
    <>
    {openModal && (
    <div className="modal-shadow">
      <div className="modal-cont">
      <button className="back-btn" onClick={()=>setOpenModal(false)}>x</button>

        <div className="modal-header">
          <h3>Add details</h3>
        </div>
        <div className="modal-content">
          <div className="grid">
            <label>Property Name</label>
            <input type="text" onChange={handleName} />
          </div>
          <div className="grid">
            <label>Address</label>
            <input type="text" onChange={handleAddress} />
          </div>
          <div className="grid">
            <label>Upload Image</label>
            <input type="file" onChange={uploadImage}/>
            {/* {
              isLoading? <p>Please wait till upload completes</p>:null
            } */}
          </div>
          <div className="grid">
            <label>City</label>
            <input type="text" onChange={handleLocation} />
          </div>
          <div className="grid">
            <label>Rent</label>
            <input type="text" onChange={handleRent}/>
          </div>
          <div className="grid">
            <label>Price</label>
            <input type="text" onChange={handlePrice} />
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={uploadPropertyData}>Submit</button>
        </div>
      </div>
    </div>)}
    </>
  );
};

export default Admin;
