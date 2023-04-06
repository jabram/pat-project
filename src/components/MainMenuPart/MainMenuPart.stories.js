import { MAIN_MENU_FOLDER } from "../../config/constants";
import MainMenuPart from "./MainMenuPart";

const Story = {
  title: `${MAIN_MENU_FOLDER}/MainMenuPart`,
  component: MainMenuPart,
  parameters: {
    layout: "fullscreen",
  },
};
export default Story;

export const Default = {
  args: {
    title: "It's a title!",
    children: (
      <>
        <p>hi</p>
        <p>expanded</p>
        <p>content</p>
      </>
    ),
  },
};

export const FitsWithinContainer = {
  args: {
    title: "I'm in a container!",
    children: (
      <>
        <p>hi</p>
        <p>expanded</p>
        <p>content</p>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "300px",
          margin: "20px auto",
          border: "3px solid green",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const MultipleStacked = {
  args: {
    title: "an option",
    children: (
      <>
        <p>hi</p>
        <p>expanded</p>
        <p>content</p>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Story />
        <Story />
      </>
    ),
  ],
};
