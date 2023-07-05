import { createContext, ReactNode } from "react";

interface IProgressContextProviderProps {
  children: ReactNode;
}

interface IProgressContextDefault {
  lastTime: string;
  status: string;
}

const progressDefault = {
  lastTime: "03/7/2023",
  status: "In progress",
};

export const ProgressContext =
  createContext<IProgressContextDefault>(progressDefault);

const ProgressContextProvider = ({
  children,
}: IProgressContextProviderProps) => {
  return (
    <ProgressContext.Provider value={progressDefault}>
      {children}
    </ProgressContext.Provider>
  );
};
export default ProgressContextProvider;
