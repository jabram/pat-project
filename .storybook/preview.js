import cssVariablesTheme from "@etchteam/storybook-addon-css-variables-theme";
import light from "!!style-loader?injectType=lazyStyleTag!css-loader!./light.css";
import dark from "!!style-loader?injectType=lazyStyleTag!css-loader!./dark.css";
import "../src/index.css";

export const decorators = [cssVariablesTheme];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  cssVariables: {
    files: {
      "Light Theme": light,
      "Dark Theme": dark,
    },
    defaultTheme: "Light Theme",
  },
};
