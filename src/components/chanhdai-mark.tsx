import Image from "next/image";
import initialsImage from "../../public/images/initials.png";

export interface PiyushMarkProps extends Omit<React.ComponentProps<typeof Image>, "src" | "alt"> { }

export function PiyushMark(props: PiyushMarkProps) {
  return (
    <Image
      src={initialsImage}
      alt="Piyush's initials"
      width={512}
      height={512}
      {...props}
    />
  );
}

export function getMarkSVG(): string {
  return initialsImage.src;
}
