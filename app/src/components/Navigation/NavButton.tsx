export type NavButtonProps = {
  onClick: () => void;
  icon: JSX.Element;
  color: string;
  dotColor?: string;
};

export const NavButton = ({
  onClick,
  icon,
  color,
  dotColor,
}: NavButtonProps) => (
  <>
    <button
      type="button"
      onClick={onClick}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </>
);
