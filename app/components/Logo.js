import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ styles }) => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Cotton Chamber Clothing Manufacturing Company Logo"
          fill
          sizes="(min-width: 1100px) 138px, (max-width: 1100px) and (min-width: 769px) 105px, (max-width: 768px) 80px"
          draggable={false}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;