import React, { PropsWithChildren } from "react";
import classNames from "classnames";

type Props = PropsWithChildren & {
  className?: string;
};

const Description: React.FC<Props> = ({ children, className }) => {
  return (
    <p className={classNames("text-lg text-gray-800", className)}>{children}</p>
  );
};

export default Description;
