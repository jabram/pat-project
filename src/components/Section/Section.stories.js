import Section from "./Section";

const Story = {
  component: Section,
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
export default Story;

export const Default = {
  args: {
    children: (
      <>
        <p>
          a section represents part of a story you can navigate to. each one is
          at least the height of the viewport. these are stacked a few times to
          show it.
        </p>
        <p>(you should scroll)</p>
      </>
    ),
  },
};
