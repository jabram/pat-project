import { MAIN_MENU_FOLDER } from "../../config/constants";
import MainMenuExpandable from "./MainMenuExpandable";

const Story = {
  title: `${MAIN_MENU_FOLDER}/MainMenuExpandable`,
  component: MainMenuExpandable,
};
export default Story;

export const Default = {
  args: {
    title: "this item can be expanded!",
    children: (
      <>
        <p>expanded section stuffs go here</p>
        <p>oh</p>
        <p>so</p>
        <p>exciting!</p>
      </>
    ),
  },
};
