import React, { useState } from "react";
import axios from "../apis/axios";
import { useNavigate } from "react-router-dom";

const PremiumUpdateButton = ({ userId, setUsers, premium }) => {
  const [isPremium, setIsPremium] = useState(premium)
  const navigate = useNavigate();
  const handleUpdateUserType = async(id) => {
    try {
      const result = await axios.put(`user/${id}`);

      if (result) {
        setIsPremium(true)
        navigate('/admin')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isPremium ? (
        <button className="button-6" role="button" onClick={()=>setIsPremium(false)}>
          Remove Premium
        </button>
      ) : (
        <button
        className="button-6"
          role="button"
          style={{ backgroundColor: "#ffff00", padding: '8px 12px', boxSizing: 'border-box' }}
          onClick={()=>handleUpdateUserType(userId)}
        >
          Upgrade to Premium
        </button>
      )}
    </div>
  );
};

export default PremiumUpdateButton;
