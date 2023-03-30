export type NavButtonProps = {
  onClick: () => void;
  icon: JSX.Element;
  color: string;
  dotColor?: string;
  number?: number;
};

export const NavButton = ({
  onClick,
  icon,
  color,
  dotColor,
  number,
}: NavButtonProps) => (
  <>
    <button
      type='button'
      onClick={onClick}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span
        style={{ background: dotColor }}
        className='absolute  rounded-full h-3.5 w-3.5 right-1.5 top-1.5'
      >
        <span
          className={
            'flex justify-center items-center items text-xs text-gray-50 dark:text-gray-50'
          }
        >
          {number ?? ''}
        </span>
      </span>
      {icon}
    </button>
  </>
);
