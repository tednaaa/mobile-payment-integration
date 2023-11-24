import { FC, MouseEventHandler, ReactNode } from "react";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export const Button: FC<Props> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="px-6 py-3 rounded-xl text-white font-medium text-xl bg-blue-600">
      {children}
    </button>
  );
};
