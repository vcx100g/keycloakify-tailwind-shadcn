import type { DeepPartial } from "keycloakify/tools/DeepPartial";
import type { KcContext } from "./KcContext";
import KcPage from "./KcPage";
import { createGetKcContextMock } from "keycloakify/login/KcContext";
import type { KcContextExtension, KcContextExtensionPerPage } from "./KcContext";
import { themeNames, kcEnvDefaults } from "../kc.gen";

const kcContextExtension: KcContextExtension = {
    themeName: themeNames[0],
    properties: {
        ...kcEnvDefaults
    }
};
const kcContextExtensionPerPage: KcContextExtensionPerPage = {};

export const { getKcContextMock } = createGetKcContextMock({
    kcContextExtension,
    kcContextExtensionPerPage,
    overrides: {},
    overridesPerPage: {}
});

export function createKcPageStory<PageId extends KcContext["pageId"]>(params: {
    pageId: PageId;
}) {
    const { pageId } = params;

    function KcPageStory(props: {
        kcContext?: DeepPartial<Extract<KcContext, { pageId: PageId }>>;
        legacy?: boolean; // Add the `legacy` flag as an optional prop
    }) {
        const { kcContext: overrides, legacy = false } = props; // Get the legacy flag, default to false

        console.log("Legacy flag in createKcPageStory:", legacy);

        const kcContextMock = getKcContextMock({
            pageId,
            overrides
        });

        return <KcPage kcContext={kcContextMock} legacy={legacy} />; // Pass `legacy` to KcPage
    }

    return { KcPageStory };
}
// export function createKcPageStory<PageId extends KcContext["pageId"]>(params: {
//     pageId: PageId;
// }) {
//     const { pageId } = params;

//     // Returns a configured version of KcPage
//     function KcPageStoryWrapper(props: {
//         kcContext?: DeepPartial<Extract<KcContext, { pageId: PageId }>>;
//         legacy?: boolean; // Optionally pass the legacy flag
//     }) {
//         const { kcContext: overrides, legacy = false } = props;

//         console.log("Legacy flag in createKcPageStoryWrapper:", legacy);

//         // Mock the KcContext based on pageId and overrides
//         const kcContextMock = getKcContextMock({
//             pageId,
//             overrides
//         });

//         // Render the actual KcPage with the legacy flag and mocked kcContext
//         return <KcPage kcContext={kcContextMock} legacy={legacy} />;
//     }

//     return { KcPageStoryWrapper };
// }
