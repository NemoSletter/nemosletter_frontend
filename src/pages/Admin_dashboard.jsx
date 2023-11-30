import React, { useEffect, useState } from "react";
import "../css/Admin.css";
import axios from "../apis/axios";
import { Users } from '../data/ListofUser'
import PremiumUpdateButton from "../components/PremiumUpdateButton";
export default function Admin_dashboard() {
  const [users, setUsers] = useState([])
  const handleGetUsers = async() => {
    try {
      const result = await axios.get('user')

      if (result) {
        console.log(result.data)
        setUsers(result.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    handleGetUsers()
  }, [])
  return (
    <>
      <div className="Usertable">
        <table>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Edit</th>
          </tr>
          {users.map((user) => (
            <tr>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>0931739393</td>
              <td>
                <PremiumUpdateButton premium={user.userType == 'premium'} userEmail={user.email} userId={user.id} setUsers={setUsers} />
              </td>
            </tr>
          ))}
          {
            Users.map((user) => (
              <tr>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>0931739393</td>
                <td>
                  <PremiumUpdateButton premium={true} />
                </td>
              </tr>
            ))
          }
        </table>
      </div>
    </>
  );
}
