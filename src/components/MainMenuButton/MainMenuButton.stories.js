import { MAIN_MENU_FOLDER } from "../../config/constants";
import MainMenuButton from "./MainMenuButton";

const Story = {
  title: `${MAIN_MENU_FOLDER}/MainMenuButton`,
  component: MainMenuButton,
};
export default Story;

export const Default = {
  args: {
    onClick: () => console.log("clicked button"),
    children: "standard text",
  },
};

export const FancyContent = {
  args: {
    onClick: () => console.log("clicked fancy button"),
    children: (
      <div
        style={{
          width: "500px",
          border: "3px solid green",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>this is some fancy</span>
        <span>shit</span>
      </div>
    ),
  },
};
