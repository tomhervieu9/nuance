import Image from "next/image";

export default function DynamicImage(props: {
  src: string;
  alt: string;
  landscape: [number, number];
  portrait: [number, number];
}) {
  return (
    <>
      <Image
        src={props.src}
        width={props.landscape[0]}
        height={props.landscape[1]}
        className="hidden md:block"
        alt={props.alt}
      />
      <Image
        src={props.src}
        width={props.landscape[0]}
        height={props.landscape[1]}
        className="block md:hidden"
        alt={props.alt}
      />
    </>
  );
}
