// import React, { useEffect, useRef, useState } from "react";
// import "./TitleCards.css";
// import {Link } from 'react-router-dom'

// const TitleCards = ({ title }) => {
//   const cardsRef = useRef();
//   const [cards_data, setCardsData] = useState([]);

//   const handleWheel = (event) => {
//     event.preventDefault();
//     cardsRef.current.scrollLeft += event.deltaY;
//   };

//   useEffect(() => {
//     // Fetching the data inside useEffect
//     fetch("/Popular.json")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok: " + res.statusText);
//         }
//         console.log(res)
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setCardsData(data); // Correctly set the state
//       })
//       .catch((error) => {
//         console.log("There was a problem with the fetch operation:", error);
//       });

//     // Adding the wheel event listener
//     cardsRef.current.addEventListener("wheel", handleWheel);

//     // Cleanup function to remove the event listener
//     return () => {
//       cardsRef.current.removeEventListener("wheel", handleWheel);
//     };
//   }, []); // Empty dependency array means this runs once on mount

//   return (
//     <div className="titlecards">
//       <h2>{title ? title : "Popular on Netflix"}</h2>
//       <div className="card_list" ref={cardsRef}>
//         {cards_data.map((card) => (
//           <Link to={`player/${card.id}`} className="card" key={card.id}>
//             <img src={card.thumbnailUrl} alt={card.title} />
//             <p>{card.title}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TitleCards;
import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ Category }) => {
  const cardsRef = useRef(null);
  const [cards_data, setCardsData] = useState([]);

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    // Fetching the data inside useEffect
    fetch("/Popular.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok: " + res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setCardsData(data); // Correctly set the state
      })
      .catch((error) => {
        console.log("There was a problem with the fetch operation:", error);
      });

    // Safely add the wheel event listener
    if (cardsRef.current) {
      cardsRef.current.addEventListener("wheel", handleWheel);
    }

    // Cleanup function to safely remove the event listener
    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  function checkCategory(category_arr = [], category) {
    // Default to an empty array if undefined
    return category_arr.some((cat) => cat === category); // Check if any category matches
  }

  return (
    <div className="titlecards">
      <h2>{Category}</h2>
      <div className="card_list" ref={cardsRef}>
        {cards_data.map(
          (card) =>
            Array.isArray(card.category) &&
            checkCategory(card.category, Category) ? (
              <Link to={`player/${card.id}`} className="card" key={card.id}>
                <img src={card.thumbnailUrl} alt={card.title} />
                <p>{card.title}</p>
              </Link>
            ) : null 
        )}
      </div>
    </div>
  );
};

export default TitleCards;
