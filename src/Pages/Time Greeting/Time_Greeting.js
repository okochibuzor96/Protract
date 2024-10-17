import React, { useState, useEffect } from "react";
import moment from "moment";
import dashboard from '../../styles/my-Dashboard.module.css';

const TimeGreeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {

    const updateGreeting = () => {
      
      const hour = moment().hour(); // Get the current hour

      if (hour >= 5 && hour < 12) {
        setGreeting("Good Morning!");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good Afternoon!");
      } else if (hour >= 17 && hour < 21) {
        setGreeting("Good Evening!");
      } else {
        setGreeting("Good Night!");
      }
    };

    updateGreeting(); // Initial call
    const interval = setInterval(updateGreeting, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <p className={dashboard.block2}>
      {greeting}
    </p>
  );
};



export default TimeGreeting;
