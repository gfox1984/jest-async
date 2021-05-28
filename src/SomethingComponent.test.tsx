import React from "react";
import { render, waitFor } from "@testing-library/react";
import { Something } from "./types";
import SomethingComponent from "./SomethingComponent";
import SomethingProvider from "./SomethingProvider";

const mock: Something = {
  getValueAsync: jest.fn().mockResolvedValue(123)
};

it("renders without crashing", () => {
  render(<SomethingComponent />);
});

it("renders something", async () => {
  render(
    <SomethingProvider something={mock}>
      <SomethingComponent />
    </SomethingProvider>
  );

  await waitFor(() => expect(document.body).toHaveTextContent("123"));
});
