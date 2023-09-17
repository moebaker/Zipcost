import React, { useState, useEffect } from "react";
import "./Feed.css";
import { db } from "./firebase"; // Import named export
import firebase from 'firebase/compat/app';
import SalaryCalculator from "./Calculator"; // Add this import

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  const [topLocations, setTopLocations] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = e => {
    e.preventDefault();
    db.collection('posts').add({
      name: 'ZipCost Notes',
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        {/* Your input options */}
      
      <SalaryCalculator /> {/* Render the SalaryCalculator component */}
      {/* Rest of your Feed component */}
    </div>

   
        <div>
       

        </div>



    </div>
  );
}

export default Feed;
