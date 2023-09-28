import ButtonSecondary from "./ButtonSecondary";
import styles from "./ButtonSecondary.module.scss";

const Story = {
  component: ButtonSecondary,
};
export default Story;

export const JustText = {
  args: {
    children: "hi secondary",
  },
};

export const MultipleChildren = {
  args: {
    children: (
      <>
        <span>this content is</span>
        <span>flexed</span>
      </>
    ),
  },
};

export const CustomStyles = {
  args: {
    className: styles.wideButton,
    children: (
      <>
        <span>this button is</span>
        <span>extra long</span>
      </>
    ),
  },
};
