import ButtonUnstyled from "./ButtonUnstyled";
import { ReactComponent as Hamburger } from "../MainLayout/hamburger.svg";

const Story = {
  component: ButtonUnstyled,
};
export default Story;

export const Default = {
  args: {
    children: "button text",
  },
};

export const IconButton = {
  args: {
    children: (
      <div style={{ background: "#000", padding: "10px" }}>
        <Hamburger />
      </div>
    ),
  },
};

export const SomethingMoreComplex = {
  args: {
    children: (
      <div
        style={{
          background: "#000",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Hamburger />
        <p
          style={{
            color: "orange",
            fontSize: "42px",
            lineHeight: 1,
            fontStyle: "italic",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          some custom text
        </p>
      </div>
    ),
  },
};
