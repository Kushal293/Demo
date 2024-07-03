import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Textfield from 'components/Textfield/Textfield';
import ImageInput from './ImageInput/ImageInput';
import Button from 'components/Button/Button';
import Checkbox from './Checkbox/Checkbox';
import { postRequest } from 'http';

const PetProfile = () => {
  const { healthConditions } = useSelector(state => state.data);
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [dob, setDob] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [is_neutered, setNeut] = useState(0);
  const [image, setImage] = useState("");
  const [mesg, setMesg] = useState("");

  let conditions = [];
  // console.log(healthConditions);

  const handleDate = (e) => {
    let date = e.target.value;
    const arr = date.split("-");
    date = arr[2] + "-" + arr[1] + "-" + arr[0];
    setDob(date);
  }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    // console.log(base64);
    setImage(base64);
  };


  const handleClick = (id) => {
    console.log(id);
    if(!conditions.includes(id)){          //checking weather array contain the id
      conditions.push(id);               //adding to array because value doesnt exists
  }else{
    conditions.splice(conditions.indexOf(id), 1);  //deleting
  }
  } 

  const saveHealthCondition = async () => {
    const uri = `/rooted_in_love/user/pet/healthcondition/add`
    const data = {
      pet_id: localStorage.getItem("pet_id"),
      health_condition_id: conditions
    }
    const save = await postRequest(uri, data);

    if(save?.status_code === "200") console.log(save?.message);
    else console.log(save?.message);

  }

  const saveProfile = async () => {

    if(name.length === 0 || breed.length === 0 || dob.length === 0 || weight.length === 0 || sex.length === 0 || image.length === 0) {
      setMesg("All Fields Are Required");
      console.log("All Fields Are Required");
      return;
    }

    const uri = `/rooted_in_love/user/pet/add`
    const data = {
      name,
      breed_type: breed,
      dob,
      weight,
      sex,
      is_neutered,
      image,
      user_id: "1"
    }
    const save = await postRequest(uri,data); 
    console.log(save);
    localStorage.setItem("pet_id", save?.pet_id);

    if(save?.status_code === "200") {
      setMesg(save?.message);
    }
    else console.log(save?.message);
  }
  return (
    <div className='flex-grow bg-primary-600-65% px-6 md:px-[70px] py-6 relative'>
      <p className='text-[18px] text-center md:text-left md:text-46px text-white font-semibold mb-2 md:my-0'>
        Fill form and{' '}
        <span className='text-secondary-600'>get recommendation</span>
      </p>
      <fieldset className='border border-white rounded-md pl-[14px] pr-[16px] md:py-4 md:px-6'>
        <legend className='text-[10px] md:text-lg bg-primary-600 text-white rounded md:rounded-md px-[10px] py-[5px] md:py-3 md:px-4 ml-5'>
          Pet Profile
        </legend>
        <fieldset className='border border-white rounded-md p-5 md:py-5 md:px-6'>
          <legend className='text-[10px] md:text-lg bg-primary-600 rounded md:rounded-md px-[10px] py-[5px] md:py-3 text-white md:px-4 ml-auto mr-5'>
            General Data
          </legend>
          <div className='flex md:gap-5 relative h-full md:h-auto w-full md:w-auto md:items-stretch'>
            <ImageInput onChange={(e) => handleFileUpload(e)} required />
            <div className='flex-grow flex flex-col md:flex-row items-center md:gap-12 md:justify-between'>
              <div className='md:flex-grow flex flex-col gap-[2px] md:gap-2 w-full md:w-auto pl-[15px] md:pl-0'>
                <Textfield placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
                <Textfield placeholder="Date of Birth" type="text" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} value={dob} pattern="[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}" onChange={(e) => handleDate(e)} required/>
                <Textfield placeholder="Sex(Male / Female)" value={sex} onChange={(e) => setSex(e.target.value)} required/>
              </div>
              <div className='md:flex-grow flex flex-col gap-[2px] md:gap-2 w-full md:w-auto pl-[15px] md:pl-0'>
                <Textfield placeholder="Breed type" value={breed} onChange={(e) => setBreed(e.target.value)} required/>
                <Textfield placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} required/>
                <Textfield placeholder="Neutered/un neutered" type='number' min="0" max="1" value={is_neutered} onChange={(e) => setNeut(e.target.value)} required/>
                {/* <input value={} onChange={(e) => setName(e.target.value)} /> */}
              </div>
            </div>
            <div className='md:flex md:flex-col md:justify-end md:pl-4'>
              <Button
                label='SAVE'
                className='text-[8px] md:text-[18px] !px-3 !py-1 md:px-6 md:py-[9px] rounded-sm font-medium absolute md:static bottom-0 right-0'
                onClick = {saveProfile}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className='border border-white rounded-md py-5 px-6 mt-[14px] md:mt-10'>
          <legend className='text-[10px] md:text-lg bg-primary-600 rounded-md py-[5px] md:py-3 text-white px-[7px] md:px-4 ml-auto mr-5'>
            Pick Health Condition
          </legend>
          <div className='flex flex-col gap-4 md:grid md:grid-cols-3 max-w-[800px] md:gap-[28px]'>
            {healthConditions?.map(option => (
              <div key={option?._id} onClick={() => handleClick(option?._id)}>
                <Checkbox label={option?.name} />
              </div>
            ))}
          </div>
          <div className='flex justify-end'>
            <Button
              label='SAVE'
              className='px-6 py-[9px] rounded-sm !font-medium'
              onClick={saveHealthCondition}
            />
          </div>
        </fieldset>
        <div className='flex justify-end mt-2 gap-6 mb-1 md:mb-0'>
          <Link to='/choice'>
            <Button
              label='BACK'
              className='px-6 py-[6px] md:py-[9px] rounded-sm !font-medium !text-primary-600 border border-primary-600 bg-transparent'
            />
          </Link>
          <Link to='/pet-suppliment-details'>
            <Button
              label='NEXT'
              className='px-6 py-[6px] md:py-[9px] rounded-sm !font-medium'
            />
          </Link>
        </div>
      </fieldset>
      {/* {mesg.length > 0 && <h2 className='absolute top-[13%] left-[45%] text-2xl font-semibold'>{mesg}</h2>} */}
    </div>
  );
};

export default PetProfile;
