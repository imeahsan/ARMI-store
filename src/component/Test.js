import React from "react";

const Test = ({ children }) => {
  return (
    <div
      class="mx-auto   max-w-screen-2xl overflow-y-visible scrollbar-hide  bg-fixed bg-center bg-no-repeat "
      style={{ backgroundImage: " url('/parts.png')" }}
    >
      <h1 className="invisible "> 1</h1>
      <div class="mt-96">{children}</div>
    </div>
  );
};

export default Test;
