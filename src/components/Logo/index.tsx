import Image, { ImageProps } from "next/image";
import styles from "./index.module.scss";

type LogoProps = Omit<ImageProps, "src" | "alt">;

export function Logo({className, ...props}: LogoProps) {
  return(
    <Image
      src="/logo.svg"
      alt="Kuhi API Logo"
      className={styles.logo}
      width={100}
      height={100}
      {...props}
      priority
    />
  );
}