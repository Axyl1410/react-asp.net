import React, { memo } from "react";
import styles from "./Anchor.module.css";

const Anchor = memo(function Anchor({
  href,
  text,
  className: additionalClassNames,
}) {
  const classNames = additionalClassNames ? ` ${additionalClassNames}` : "";

  return (
    <a
      className={`${styles.links} ${classNames} inline-block after:bg-black dark:after:bg-white`}
      href={href}
      rel="noreferrer noopener"
      target="_blank"
    >
      {text}
    </a>
  );
});

export default Anchor;
