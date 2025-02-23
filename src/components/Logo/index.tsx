import Image, { ImageProps } from "next/image";
import styles from "./index.module.scss";
import clsx from "clsx";

export type LogoProps = Omit<ImageProps, "src" | "alt"> & {
  className?: string;
};

export function Logo({ className, ...props }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Kuhi API Logo"
      className={clsx(styles.logo, className)}
      width={100}
      height={100}
      priority
      {...props}
    />
  );
}