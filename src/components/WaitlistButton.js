import React from "react";
import { useNavigate } from "react-router-dom";

const WaitlistButton = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: "275px" }}>
      <div>
        <button
          onClick={() => navigate("/waitlist")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          aria-label="Join the waitlist"
        >
          <img
            alt="Join the waitlist button"
            border="0"
            src="https://s3-us-west-1.amazonaws.com/waitlistr-public/assets/buttons/referral-button-btn-purple.png"
            loading="lazy"
          />
        </button>
      </div>
    </div>
  );
};

export default WaitlistButton;