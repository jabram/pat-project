import { render } from "@testing-library/react";
import Demo from "./Demo";

test("renders Demo without crashing", () => {
  render(<Demo />);
});
