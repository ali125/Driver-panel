import React, { PropsWithChildren } from "react";
import classNames from "classnames";

type Props = PropsWithChildren & {
  className?: string;
};

const Title: React.FC<Props> = ({ children, className }) => {
  return (
    <h4 className={classNames("mb-4 text-2xl font-extrabold", className)}>
      {children}
    </h4>
  );
};

export default Title;
