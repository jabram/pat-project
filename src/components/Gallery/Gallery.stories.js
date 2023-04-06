import Gallery from "./Gallery";

const Story = {
  component: Gallery,
};
export default Story;

export const Default = {
  args: {
    children: (
      <span style={{ fontSize: "20px", color: "orange", fontStyle: "italic" }}>
        hi gallery
      </span>
    ),
  },
};
