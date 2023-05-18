import { MAIN_MENU_FOLDER } from "../../config/constants";
import MainMenuItem from "./MainMenuItem";

const Story = {
  title: `${MAIN_MENU_FOLDER}/MainMenuItem`,
  component: MainMenuItem,
};
export default Story;

export const Default = {
  args: {
    title: "A menu item!",
  },
};

export const InsideExpandedContent = {
  args: {
    title: "This item is inside an expanded section",
    isExpandedContent: true,
  },
};
