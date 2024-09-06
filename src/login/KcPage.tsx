import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "keycloakify/login/Template";
import { Template as CustomTemplate } from "./Template";
import "./../styles/global.css";
import Login from "./pages/Login";

const UserProfileFormFields = lazy(
    () => import("keycloakify/login/UserProfileFormFields")
);

// Base component to render DefaultPage
const Base = ({
    kcContext,
    i18n,
    classes
}: {
    kcContext: KcContext;
    i18n: any;
    classes: any;
}) => {
    return (
        <DefaultPage
            kcContext={kcContext}
            i18n={i18n}
            classes={classes}
            Template={CustomTemplate}
            doUseDefaultCss={true}
            UserProfileFormFields={UserProfileFormFields}
            doMakeUserConfirmPassword={doMakeUserConfirmPassword}
        />
    );
};

export interface KcPageArgs {
    kcContext: KcContext;
    legacy?: boolean;
}

const doMakeUserConfirmPassword = true;

export default function KcPage(props: KcPageArgs) {
    const { kcContext, legacy } = props; // Get the `legacy` flag as a prop
    const { i18n } = useI18n({ kcContext });

    console.log("Legacy flag in KcPage:", legacy);

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login.ftl":
                        if (legacy) {
                            return (
                                <Base
                                    kcContext={kcContext}
                                    i18n={i18n}
                                    classes={classesDefault}
                                />
                            );
                        }
                        return (
                            <Login
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );

                    default:
                        return (
                            <Base
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classesDefault}
                            />
                        );
                }
            })()}
        </Suspense>
    );
}

const classescustom = {
    kcHtmlClass: "bg-background",
    kcLoginClass: "bg-background h-screen"
} satisfies { [key in ClassKey]?: string };

const classesDefault = {} satisfies { [key in ClassKey]?: string };
