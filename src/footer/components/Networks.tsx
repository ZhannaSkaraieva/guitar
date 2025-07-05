import React from "react";
import ScypeIcon from "../../assets/ScypeIcon";
import VscoIcon from "../../assets/VscoIcon";
import PinterestIcon from "../../assets/PinterestIcon";

const Networks = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-1.25">
      <a>
        <ScypeIcon />
      </a>
      <a>
        <VscoIcon />
      </a>
      <a>
        <PinterestIcon />
      </a>
    </div>
  );
};

export default Networks;
