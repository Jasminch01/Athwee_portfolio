import React from "react";
interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1450px] 2xl:px-0 px-5 lg:px-5 mx-auto">{children}</div>
  );
};

export default Container;
