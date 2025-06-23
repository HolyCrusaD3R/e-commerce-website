import React from "react";

export default function Icon({ icon, size = 41 }) {
  return <img src={icon} width={size} height={size} />;
}
