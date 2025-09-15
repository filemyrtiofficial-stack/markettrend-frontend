import { useState, useEffect } from "react";
import "./Style/ComingSoon.css";

export default function ComingSoon({ pageName, launchDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div className="comingsoon-container">
      <h1 className="comingsoon-title">
        🚀 Coming Soon: {pageName} 🚀
      </h1>
      <p className="comingsoon-subtitle">
        We’re working hard to launch something amazing. Stay tuned!
      </p>

      {/* Countdown */}
      <div className="countdown">
        <div className="count-box">
          <span>{timeLeft.days}</span>
          <small>Days</small>
        </div>
        <div className="count-box">
          <span>{timeLeft.hours}</span>
          <small>Hours</small>
        </div>
        <div className="count-box">
          <span>{timeLeft.minutes}</span>
          <small>Minutes</small>
        </div>
        <div className="count-box">
          <span>{timeLeft.seconds}</span>
          <small>Seconds</small>
        </div>
      </div>

      {/* Notify Form */}
      <form className="notify-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Notify Me</button>
      </form>
    </div>
  );
}
