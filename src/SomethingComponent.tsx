import React, { useEffect, useState } from "react";
import { useSomething } from "./SomethingProvider";

export default function SomethingComponent() {
  const [value, setValue] = useState<number | undefined>();
  const something = useSomething();

  useEffect(() => {
    if (something) something.getValueAsync().then(setValue);
  }, [something]);

  return (
    <>
      The value of something is:
      {value ?? "no value"}
    </>
  );
}
