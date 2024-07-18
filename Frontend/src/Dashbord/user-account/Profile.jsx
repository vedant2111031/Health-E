import React, { useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { BASE_URL, getToken} from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";




const Profile = ({user}) => {
  const [selectedFile, setSelectedFile] = useState("");
  const[previewURL,setPreviewURL]=useState('')

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo:selectedFile,
    gender: "",
    bloodType: "",
  });

  const navigate = useNavigate();

  useEffect(()=>{
    setFormData({ name:user.name , email:user.email, photo:user.photo , gender:user.gender , bloodType:user.bloodType })
  },[user])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelFileInputChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
    // setFormData({photo:user.photo})
  };

  const submitHandler = async (event) => {
    // console.log(formData)
    event.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    const appendIfNotEmpty = (key, value) => {
      if (value !== null && value !== undefined && value !== '') {
        formDataToSend.append(key, value);
      }
    };
  
    appendIfNotEmpty("name", formData.name);
    appendIfNotEmpty("email", formData.email);
    appendIfNotEmpty("password", formData.password);
    appendIfNotEmpty("gender", formData.gender);
    appendIfNotEmpty("role", formData.role);
    appendIfNotEmpty("photo", selectedFile);
    appendIfNotEmpty("bloodType", formData.bloodType);
  
    const token=getToken()

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "put",
        headers:{
          Authorization:`Bearer ${token}`
        },
        body:formDataToSend,
      });

      const {message}= await res.json();
      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/users/profile/me");
    } catch (error) {
      if (error.statusCode == 500) toast.error("Internal server error");
      else toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="mt-10">
      <form onSubmit={submitHandler}>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
            aria-readonly
            readOnly
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
          
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Blood Type"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
            required
          />
        </div>
        <div className="mb-5 flex items-center justify-between">
          <label className="text-headingColor font-bold text-[16px] leading-7">
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
              id="gender"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Others</option>
            </select>
          </label>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {previewURL && (
            <figure className="w-[40px] h-[40px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img src={previewURL} alt="Preview" className="w-full rounded-full" />
            </figure>
          )}

          <div className="relative w-[160px] h-[40px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handelFileInputChange}
              accept=".jpg, .png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
            >
              {selectedFile ? selectedFile.name:'Upload Photo'}
            </label>
          </div>
        </div>
        <div className="mt-7">
          <button
            disabled={loading && true}
            type="submit"
            className="w-full bg-primaryColor text-white text-[16px] leading[30px] rounded-lg px-4 py-3"
          >
            {loading ? <HashLoader size={35} color="#ffffff" /> : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
