import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { ModeDecorator } from "./modeDecorator";
import "./../src/styles/global.css";
export const decorators = [ModeDecorator];
const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
};

export default preview;
