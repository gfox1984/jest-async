import React, { ReactNode, useContext } from "react";
import { Something } from "./types";

const SomethingContext = React.createContext<Something | undefined>(undefined);
export const useSomething = () => useContext(SomethingContext);

interface Props {
  something?: Something;
  children: ReactNode;
}

export default function SomethingProvider({ something, children }: Props) {
  return (
    <SomethingContext.Provider value={something}>
      {children}
    </SomethingContext.Provider>
  );
}
