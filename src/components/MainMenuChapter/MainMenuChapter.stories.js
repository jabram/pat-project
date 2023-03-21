import { MAIN_MENU_FOLDER } from "../../constants";
import MainMenuChapter from "./MainMenuChapter";

const Story = {
  title: `${MAIN_MENU_FOLDER}/MainMenuChapter`,
  component: MainMenuChapter,
};
export default Story;

export const Default = {
  args: {
    title: "Chapter Title",
  },
};

export const MultipleChaptersStacked = {
  args: {
    title: "Chapter Title",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Story />
        <Story />
        <Story />
      </div>
    ),
  ],
};
