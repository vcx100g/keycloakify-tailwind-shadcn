import type { Meta, StoryObj } from "@storybook/react";
import KcPage, { KcPageArgs } from "../KcPage"; // Import the actual KcPage component
import { getKcContextMock } from "../KcPageStory";
const meta = {
    title: "login/login.ftl",
    component: KcPage
} satisfies Meta<typeof KcPage>;
export default meta;

type Story = StoryObj<typeof meta>;
const kcContextMock = getKcContextMock({ pageId: "login.ftl" });

export const Default: StoryObj<KcPageArgs> = {
    // render: args => <KcPage {...args} />,
    args: {
        legacy: false, // Default args,
        kcContext: kcContextMock
    }
};

// import { createKcPageStory } from "../KcPageStory";
// import type { KcContext } from "../KcContext";

// import type { Meta, StoryObj } from "@storybook/react";
// import { DeepPartial } from "keycloakify/tools/DeepPartial";
// import KcPage from "../KcPage"; // Import the actual KcPage component
// // Create the KcPageStoryWrapper
// const { KcPageStoryWrapper } = createKcPageStory({ pageId: "login.ftl" });

// export default {
//     title: "login/KcPage",
//     component: KcPage
// } satisfies Meta<typeof KcPage>;

// // Define the prop types for args
// type KcPageStoryArgs = {
//     kcContext?: DeepPartial<KcContext>;
//     legacy?: boolean;
// };

// // Default story for KcPage using StoryObj
// export const Default: StoryObj<KcPageStoryArgs> = {
//     render: args => <KcPageStoryWrapper {...args} legacy={false} />,
//     args: {
//         legacy: false // Default args
//     }
// };

// // Legacy mode story for KcPage using StoryObj
// export const LegacyMode: StoryObj<KcPageStoryArgs> = {
//     render: args => <KcPageStoryWrapper {...args} legacy={true} />,
//     args: {
//         legacy: true // Enable legacy mode
//     }
// };

// import type { Meta, StoryObj } from "@storybook/react";
// import { createKcPageStory } from "../KcPageStory";

// const { KcPageStory } = createKcPageStory({ pageId: "login.ftl" });

// const meta = {
//     title: "login/login.ftl",
//     component: KcPageStory
// } satisfies Meta<typeof KcPageStory>;

// export default meta;

// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//     render: args => <KcPageStory {...args} />,
//     args: { legacy: false }
// };

// export const WithInvalidCredential: Story = {
//     render: args => (
//         <KcPageStory
//             {...args}
//             kcContext={{
//                 login: {
//                     username: "johndoe"
//                 },
//                 messagesPerField: {
//                     // NOTE: The other functions of messagesPerField are derived from get() and
//                     // existsError() so they are the only ones that need to mock.
//                     existsError: (fieldName: string, ...otherFieldNames: string[]) => {
//                         const fieldNames = [fieldName, ...otherFieldNames];
//                         return fieldNames.includes("username") || fieldNames.includes("password");
//                     },
//                     get: (fieldName: string) => {
//                         if (fieldName === "username" || fieldName === "password") {
//                             return "Invalid username or password.";
//                         }
//                         return "";
//                     }
//                 }
//             }}
//         />
//     ) // Spread the args to pass ORG_EN and other props
// };

// export const WithoutRegistration: Story = {
//     render: args => (
//         <KcPageStory
//             {...args}
//             kcContext={{
//                 realm: { registrationAllowed: false }
//             }}
//         />
//     ) // Spread the args to pass ORG_EN and other props
// };

// export const WithoutRememberMe: Story = {
//     render: args => (
//         <KcPageStory
//             {...args}
//             kcContext={{
//                 realm: { rememberMe: false }
//             }}
//         />
//     ) // Spread the args to pass ORG_EN and other props
// };

// export const WithoutPasswordReset: Story = {
//     render: args => (
//         <KcPageStory
//             {...args}
//             kcContext={{
//                 realm: { resetPasswordAllowed: false }
//             }}
//         />
//     ) // Spread the args to pass ORG_EN and other props
// };

// export const WithEmailAsUsername: Story = {
//     render: args => (
//         <KcPageStory
//             {...args}
//             kcContext={{
//                 realm: { loginWithEmailAllowed: false }
//             }}
//         />
//     ) // Spread the args to pass ORG_EN and other props
// };

// export const WithPresetUsername: Story = {
//     render: args => (
//         <KcPageStory
//             {...args}
//             kcContext={{
//                 login: { username: "max.mustermann@mail.com" }
//             }}
//         />
//     ) // Spread the args to pass ORG_EN and other props
// };

// export const WithImmutablePresetUsername: Story = {
//     render: args => (
//         <KcPageStory
//             {...args}
//             kcContext={{
//                 auth: {
//                     attemptedUsername: "max.mustermann@mail.com",
//                     showUsername: true
//                 },
//                 usernameHidden: true,
//                 message: {
//                     type: "info",
//                     summary: "Please re-authenticate to continue"
//                 }
//             }}
//         />
//     ) // Spread the args to pass ORG_EN and other props
// };

// export const WithSocialProviders: Story = {
//     render: args => (
//         <KcPageStory
//             {...args}
//             kcContext={{
//                 social: {
//                     displayInfo: true,
//                     providers: [
//                         {
//                             loginUrl: "google",
//                             alias: "google",
//                             providerId: "google",
//                             displayName: "Google",
//                             iconClasses: "fa fa-google"
//                         },
//                         {
//                             loginUrl: "microsoft",
//                             alias: "microsoft",
//                             providerId: "microsoft",
//                             displayName: "Microsoft",
//                             iconClasses: "fa fa-windows"
//                         },
//                         {
//                             loginUrl: "facebook",
//                             alias: "facebook",
//                             providerId: "facebook",
//                             displayName: "Facebook",
//                             iconClasses: "fa fa-facebook"
//                         },
//                         {
//                             loginUrl: "instagram",
//                             alias: "instagram",
//                             providerId: "instagram",
//                             displayName: "Instagram",
//                             iconClasses: "fa fa-instagram"
//                         },
//                         {
//                             loginUrl: "twitter",
//                             alias: "twitter",
//                             providerId: "twitter",
//                             displayName: "Twitter",
//                             iconClasses: "fa fa-twitter"
//                         },
//                         {
//                             loginUrl: "linkedin",
//                             alias: "linkedin",
//                             providerId: "linkedin",
//                             displayName: "LinkedIn",
//                             iconClasses: "fa fa-linkedin"
//                         },
//                         {
//                             loginUrl: "stackoverflow",
//                             alias: "stackoverflow",
//                             providerId: "stackoverflow",
//                             displayName: "Stackoverflow",
//                             iconClasses: "fa fa-stack-overflow"
//                         },
//                         {
//                             loginUrl: "github",
//                             alias: "github",
//                             providerId: "github",
//                             displayName: "Github",
//                             iconClasses: "fa fa-github"
//                         },
//                         {
//                             loginUrl: "gitlab",
//                             alias: "gitlab",
//                             providerId: "gitlab",
//                             displayName: "Gitlab",
//                             iconClasses: "fa fa-gitlab"
//                         },
//                         {
//                             loginUrl: "bitbucket",
//                             alias: "bitbucket",
//                             providerId: "bitbucket",
//                             displayName: "Bitbucket",
//                             iconClasses: "fa fa-bitbucket"
//                         },
//                         {
//                             loginUrl: "paypal",
//                             alias: "paypal",
//                             providerId: "paypal",
//                             displayName: "PayPal",
//                             iconClasses: "fa fa-paypal"
//                         },
//                         {
//                             loginUrl: "openshift",
//                             alias: "openshift",
//                             providerId: "openshift",
//                             displayName: "OpenShift",
//                             iconClasses: "fa fa-cloud"
//                         }
//                     ]
//                 }
//             }}
//         />
//     ) // Spread the args to pass ORG_EN and other props
// };

// export const WithoutPasswordField: Story = {
//     render: args => (
//         <KcPageStory
//             {...args}
//             kcContext={{
//                 realm: { password: false }
//             }}
//         />
//     ) // Spread the args to pass ORG_EN and other props
// };

// export const WithErrorMessage: Story = {
//     render: args => (
//         <KcPageStory
//             {...args}
//             kcContext={{
//                 message: {
//                     summary: "The time allotted for the connection has elapsed.<br/>The login process will restart from the beginning.",
//                     type: "error"
//                 }
//             }}
//         />
//     ) // Spread the args to pass ORG_EN and other props
// };
