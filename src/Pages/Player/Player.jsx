

// export default Player;
import React, { useState, useEffect } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const Player = () => {
  const { Id } = useParams();
  const navigate = useNavigate();
  const [cards_video, setCardsvideo] = useState({
    id: "",
    title: "",
    key: "",
    publish_date: "",
    type: "",
    description: "",
    videoUrl: "", // Default value added for videoUrl
  });
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        console.log("Logged Out");
        navigate('/login'); // Only redirect if on a protected route
      }
    });
  }, [navigate]);
  
  

  useEffect(() => {
    console.log("Current video ID:", Id); // Log the ID for debugging
    // Fetching the data inside useEffect
    fetch("/Popular.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok: " + res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        const foundCard = data.find((card) => card.id === Id); // Find the matching card by ID
        if (foundCard) {
          setCardsvideo(foundCard); // Correctly set the state with the found card
          console.log("Found card:", foundCard);
        } else {
          console.error("No video found for this ID.");
          navigate("/not-found"); // Redirect or handle error
        }
      })
      .catch((error) => {
        console.log("There was a problem with the fetch operation:", error);
      });
  }, [Id, navigate]);

  return (
        <div className="player">
          <img onClick={()=>{navigate(-1)}} src={back_arrow_icon} alt="Back Arrow" />
          <iframe
            width="90%"
            height="90%"
            src={cards_video.videoUrl}
            title="YouTube trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="player_info">
            <p className="p1" >{cards_video.title}</p>
            <p>{cards_video.type}</p>
            <p>{cards_video.publish_date}</p>
          </div>
    
          <div className="description_info">
            <p className="p2">Description:</p>
            <p className="p3">{cards_video.description}</p>
          </div>
        </div>
      );
};

export default Player;
