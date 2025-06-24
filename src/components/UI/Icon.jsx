import React from "react";

export default function Icon({ icon, size = 41, onClick }) {
  return <img src={icon} width={size} height={size} onClick={onClick} />;
}
