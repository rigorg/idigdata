type Props = {
  src: string;
  name: string;
  /** Stacked lockups (The Rig, FlowCraft) need more height than a wide wordmark. */
  stacked?: boolean;
  compact?: boolean;
};

export default function BuilderLockup({
  src,
  name,
  stacked = false,
  compact = false,
}: Props) {
  const stackedClass = compact
    ? "max-h-20 max-w-[10.5rem]"
    : "h-28 max-w-[18rem] md:h-36 md:max-w-[22rem]";
  const wordClass = compact
    ? "max-h-12 max-w-[11rem]"
    : "h-12 max-w-[18rem] md:h-14";

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static owned lockups
    <img
      src={src}
      alt={name}
      className={`w-auto object-contain object-center ${
        stacked ? stackedClass : wordClass
      }`}
    />
  );
}
