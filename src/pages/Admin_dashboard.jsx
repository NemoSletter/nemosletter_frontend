import React, { useState } from "react";
import "../css/Admin.css";
import { Users } from "../data/ListofUser";
import PremiumUpdateButton from "../components/PremiumUpdateButton";
export default function Admin_dashboard() {
  return (
    <>
      <div className="Usertable">
        <table>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Edit</th>
          </tr>
          {Users.map((user) => (
            <tr>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>
                <PremiumUpdateButton isPremium={user.isPremium} />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
