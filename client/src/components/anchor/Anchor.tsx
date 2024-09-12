import React, { memo } from "react";
import styles from "./Anchor.module.css";

interface AnchorProps {
  href: string;
  text: string;
  className?: string;
}

const Anchor: React.FC<AnchorProps> = memo(({ href, text, className }) => {
  const classNames = className ? ` ${className}` : "";

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
