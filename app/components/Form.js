'use client'
import React, { useState } from "react";

export default function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        const response = await fetch("http://127.0.0.1:8000/register/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "firstName":firstName,
            "lastName":lastName,
            "email":email,
            "password":password,
            "phone_number":phoneNumber,
            "location":location,
            "crafts": "MOVING_AND_PACKING",
            "role":"Custmer",
          }),
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
        setIsLoading(false);
        console.log(data);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}method="post" encType="multipart/form-data">
        {error && <p>{error}</p>}
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            name="first_name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            name="last_name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone_number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Location:
          <select name="location" value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Select</option>
            <option value="AMMAN">Amman</option>
            <option value="ZARQA">Zarqa</option>
            <option value="IRBID">Irbid</option>
            <option value="AQAPA">Aqaba</option>
            <option value="MAFRAQ">Mafraq</option>
            <option value="MADABA">Madaba</option>
            <option value="BALQA">As-Salt</option>
            <option value="JERASH">Jerash</option>
            <option value="MAAN">Ma'an</option>
            <option value="KARAK">Karak</option>
            <option value="TAFILAH">Tafilah</option>
            <option value="AJLOUN">Ajloun</option>
          </select>
        </label>
        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    );
  }