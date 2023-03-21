import MainMenu from "./MainMenu";

const Story = {
  component: MainMenu,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <>
        <div>
          <p>Here's some junk content to represent the main view.</p>
          <p>
            Duis deserunt pariatur nulla esse irure. Anim ipsum ex esse et ut
            sunt. Excepteur laboris voluptate culpa officia duis nisi aute irure
            veniam ipsum. Irure esse eiusmod amet labore ad amet et aliqua
            aliquip sint cillum ipsum. Pariatur culpa et dolore excepteur
            consectetur elit amet aliqua laborum. Aliquip excepteur velit
            deserunt dolor ad dolore. Culpa excepteur aliquip aliqua quis quis
            aliquip est cupidatat cillum laborum sit.
          </p>
          <p>
            Laboris nulla aliquip amet qui excepteur velit. Consectetur
            consectetur non laborum Lorem nisi sint aliqua laboris aute sint
            pariatur adipisicing. Elit mollit nisi ea velit in officia officia
            ullamco cupidatat minim. Ex officia mollit consequat commodo est
            ipsum adipisicing esse. Pariatur dolore non minim dolore enim et
            pariatur pariatur laborum magna eiusmod voluptate do. Sit ut dolore
            cupidatat est sunt anim voluptate eiusmod quis. Amet enim esse nisi
            exercitation dolore anim velit.
          </p>
          <p>
            Sunt ea magna aliquip esse. Quis do commodo occaecat in dolore do
            aliqua culpa officia eu veniam elit in. Ipsum elit incididunt
            commodo Lorem anim ad laborum duis proident. Cupidatat et cillum
            labore veniam ex tempor consequat.
          </p>
          <p>
            Pariatur velit enim do reprehenderit nulla mollit aute officia
            officia tempor. Officia sunt cillum deserunt aute. Commodo quis
            excepteur labore elit ea fugiat aliqua velit tempor duis.
          </p>
          <p>
            Consectetur exercitation est pariatur non excepteur amet aliqua
            deserunt sunt laboris. Veniam incididunt fugiat ex nostrud
            exercitation ex est proident consequat adipisicing labore non. Magna
            velit reprehenderit sit Lorem duis. Magna consectetur exercitation
            labore nisi cupidatat laboris culpa consectetur proident aute aute
            qui minim enim.
          </p>
        </div>
        <Story />
      </>
    ),
  ],
};
export default Story;

export const Default = {
  args: {
    isMenuOpen: true,
    closeMenu: () => console.log("clicked close menu!"),
  },
};
