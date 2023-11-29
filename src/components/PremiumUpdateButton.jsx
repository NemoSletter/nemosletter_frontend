import React from "react";

const PremiumUpdateButton = ({ isPremium }) => {
  return (
    <div>
      {isPremium ? (
        <button class="button-6" role="button">
          Remove Premium
        </button>
      ) : (
        <button
          class="button-6"
          role="button"
          style={{ backgroundColor: "#ffff00" }}
        >
          Upgrade to Premium
        </button>
      )}
    </div>
  );
};

export default PremiumUpdateButton;
