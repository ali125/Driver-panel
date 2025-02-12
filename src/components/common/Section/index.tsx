import classNames from "classnames";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
};

const Section: React.FC<Props> = ({ children, className }) => {
  return (
    <section
      className={classNames("rounded-2xl bg-secondary p-6 md:p-8", className)}
    >
      {children}
    </section>
  );
};

export default Section;
