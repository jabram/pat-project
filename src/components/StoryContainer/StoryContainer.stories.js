import MainLayout from "../MainLayout/MainLayout";
import StoryContainer from "./StoryContainer";

const Story = {
  component: StoryContainer,
};
export default Story;

export const Default = {
  args: {
    children: (
      <div>
        <p>hi story container children here</p>
        <p>this component sets up the left and right padding for text blocks</p>
        <p>
          there's extra space on the right by default to accommodate the main
          menu
        </p>
        <p>
          Elit do sit exercitation veniam amet aliquip voluptate magna
          exercitation tempor occaecat proident quis proident. Nulla duis do do
          exercitation excepteur dolor.
        </p>
        <p>
          Anim dolor id consequat minim exercitation in culpa cupidatat nisi
          mollit id in.
        </p>
        <p>
          Ullamco magna dolor ex voluptate proident sit enim dolore aliqua esse
          adipisicing eu. Pariatur veniam occaecat sunt eiusmod reprehenderit eu
          commodo eu nisi eu.
        </p>
        <p>Quis aliquip quis ex do excepteur ipsum sint laborum.</p>
        <p>
          Do commodo sunt elit non exercitation amet do et anim ullamco
          reprehenderit nisi in nisi.
        </p>
      </div>
    ),
  },
};

export const NoMenu = {
  args: {
    makeRoomForMenu: false,
    children: (
      <div>
        <p>
          here's a story container with no extra room at the right for the main
          menu
        </p>
        <p>
          Elit do sit exercitation veniam amet aliquip voluptate magna
          exercitation tempor occaecat proident quis proident. Nulla duis do do
          exercitation excepteur dolor.
        </p>
        <p>
          Anim dolor id consequat minim exercitation in culpa cupidatat nisi
          mollit id in.
        </p>
        <p>
          Ullamco magna dolor ex voluptate proident sit enim dolore aliqua esse
          adipisicing eu. Pariatur veniam occaecat sunt eiusmod reprehenderit eu
          commodo eu nisi eu.
        </p>
        <p>Quis aliquip quis ex do excepteur ipsum sint laborum.</p>
        <p>
          Do commodo sunt elit non exercitation amet do et anim ullamco
          reprehenderit nisi in nisi.
        </p>
      </div>
    ),
  },
};

export const WithinMainLayout = {
  args: {
    children: (
      <MainLayout>
        <p>
          hi story container from within a MainLayout component (including main
          menu)
        </p>
        <p>
          Elit do sit exercitation veniam amet aliquip voluptate magna
          exercitation tempor occaecat proident quis proident. Nulla duis do do
          exercitation excepteur dolor.
        </p>
        <p>
          Anim dolor id consequat minim exercitation in culpa cupidatat nisi
          mollit id in.
        </p>
        <p>
          Ullamco magna dolor ex voluptate proident sit enim dolore aliqua esse
          adipisicing eu. Pariatur veniam occaecat sunt eiusmod reprehenderit eu
          commodo eu nisi eu.
        </p>
        <p>Quis aliquip quis ex do excepteur ipsum sint laborum.</p>
        <p>
          Do commodo sunt elit non exercitation amet do et anim ullamco
          reprehenderit nisi in nisi.
        </p>
        <p>
          Ullamco consectetur do aute qui ut. Veniam deserunt nulla proident
          commodo consectetur. Cillum dolor ex reprehenderit eiusmod mollit
          nostrud cillum.
        </p>
        <p>
          Elit cupidatat labore non id ea eiusmod incididunt mollit officia et
          qui fugiat incididunt.
        </p>
        <p>
          Aliqua sunt consectetur magna sint aute tempor officia. In anim non
          consequat et occaecat amet irure magna dolor occaecat exercitation.
        </p>
        <p>
          Exercitation sint consequat Lorem ex duis minim sunt eu laborum magna
          consectetur officia.
        </p>
        <p>
          Anim reprehenderit aliqua nostrud exercitation ipsum do mollit mollit
          cupidatat consectetur. Sunt voluptate adipisicing enim laboris.
        </p>
        <p>
          Quis tempor exercitation cillum cupidatat laboris ipsum eiusmod ea.
        </p>
      </MainLayout>
    ),
  },
};
