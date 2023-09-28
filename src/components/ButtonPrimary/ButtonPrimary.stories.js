import ButtonPrimary from "./ButtonPrimary";
import styles from "./ButtonPrimary.module.scss";

const Story = {
  component: ButtonPrimary,
};
export default Story;

export const JustText = {
  args: {
    children: "hi primary",
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
