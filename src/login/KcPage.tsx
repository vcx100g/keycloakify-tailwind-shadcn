import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import { Template as CustomTemplate } from "./Template";
import "./../styles/global.css";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Terms from "./pages/Terms";
import Error from "./pages/Error";
import Code from "./pages/Code";
import DeleteAccountConfirm from "./pages/DeleteAccountConfirm";
import DeleteCredential from "./pages/DeleteCredential";
import FrontchannelLogout from "./pages/FrontchannelLogout";
import IdpReviewUserProfile from "./pages/IdpReviewUserProfile";
import LoginConfigTotp from "./pages/LoginConfigTotp";
const UserProfileFormFields = lazy(() => import("./UserProfileFormFields"));

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

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const kcContext = props.kcContext; // Get the `legacy` flag as a prop
    const { i18n } = useI18n({ kcContext });

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login-config-totp.ftl":
                        return (
                            <LoginConfigTotp
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "info.ftl":
                        return (
                            <Info
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "idp-review-user-profile.ftl":
                        return (
                            <IdpReviewUserProfile
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields} // Pass the required UserProfileFormFields prop
                                doMakeUserConfirmPassword={true} // or false, depending on your requirement
                            />
                        );
                    case "frontchannel-logout.ftl":
                        return (
                            <FrontchannelLogout
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "delete-credential.ftl":
                        return (
                            <DeleteCredential
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "delete-account-confirm.ftl":
                        return (
                            <DeleteAccountConfirm
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "code.ftl":
                        return (
                            <Code
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "error.ftl":
                        return (
                            <Error
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "terms.ftl":
                        return (
                            <Terms
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "register.ftl":
                        return (
                            <Register
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields} // Pass the required UserProfileFormFields prop
                                doMakeUserConfirmPassword={true} // or false, depending on your requirement
                            />
                        );
                    case "login.ftl":
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
    kcHtmlClass: "bg-background"
} satisfies { [key in ClassKey]?: string };

const classesDefault = {} satisfies { [key in ClassKey]?: string };
