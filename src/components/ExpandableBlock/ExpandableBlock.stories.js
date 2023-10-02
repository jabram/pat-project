import ExpandableBlock from "./ExpandableBlock";

const Story = {
  component: ExpandableBlock,
  parameters: {
    layout: "fullscreen",
  },
};
export default Story;

export const Default = {
  args: {
    children: "deez children",
  },
};

export const MoreStuff = {
  args: {
    title: "Part 1: Some Title",
    children: (
      <>
        <p>more child elements</p>
        <p>there's lots of them</p>
        <p>omg so many</p>
        <p>
          Qui qui aute ad id aute dolor amet duis adipisicing in cupidatat ipsum
          quis magna. Ut anim dolore ullamco aute ad qui do ut excepteur.
          Adipisicing nisi qui non enim culpa. Sunt aliqua est exercitation ut
          ad labore et.
        </p>
      </>
    ),
  },
};
