import React, { useEffect, useState } from "react";

function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setTime(now.toLocaleTimeString("en-IN", options));
    };

    updateTime(); // Initial call to set time immediately
    const timer = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Maharishi Received All Copyrights ⓒ {year} | Current Time: {time}
      </p>
    </footer>
  );
}

export default Footer;
