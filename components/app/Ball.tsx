import classNames from "classnames";

export type BallProps = {
  readonly x: number;
  readonly y: number;
};

export const Ball = (props: BallProps) => {
  const { x, y } = props;

  return (
    <div
      className={classNames(
        "absolute",
        "top-0",
        "bottom-0",
        "w-8",
        "h-8",
        "bg-blue-800",
        "rounded-full"
      )}
      style={{ transform: `translate(${x}px, ${y}px)` }}
    />
  );
};