import { MAIN_MENU_FOLDER } from "../../config/constants";
import MenuText from "./MenuText";

const Story = {
  title: `${MAIN_MENU_FOLDER}/MenuText`,
  component: MenuText,
};
export default Story;

export const Default = {
  args: {
    text: "this is the passed-in text",
  },
};
