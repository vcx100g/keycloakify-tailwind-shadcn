import { useEffect } from "react";
import { assert } from "keycloakify/tools/assert";
import { clsx } from "keycloakify/tools/clsx";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useInsertScriptTags } from "keycloakify/tools/useInsertScriptTags";
import { useInsertLinkTags } from "keycloakify/tools/useInsertLinkTags";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import type { I18n } from "./i18n";
import type { KcContext } from "./KcContext";
import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/ui/mode-toggle";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import "../styles/global.css";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent
} from "../components/ui/dropdown-menu";

export function Template(props: TemplateProps<KcContext, I18n>) {
    const {
        displayInfo = false,
        displayMessage = true,
        displayRequiredFields = false,
        headerNode,
        socialProvidersNode = null,
        infoNode = null,
        documentTitle,
        bodyClassName,
        kcContext,
        i18n,
        doUseDefaultCss,
        classes,
        children
    } = props;

    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

    const { msg, msgStr, getChangeLocaleUrl, labelBySupportedLanguageTag, currentLanguageTag } = i18n;

    const { realm, locale, auth, url, message, isAppInitiatedAction, authenticationSession, scripts } = kcContext;

    useEffect(() => {
        document.title = documentTitle ?? msgStr("loginTitle", kcContext.realm.displayName);
    }, []);

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: bodyClassName ?? kcClsx("kcBodyClass")
    });

    useEffect(() => {
        const { currentLanguageTag } = locale ?? {};

        if (currentLanguageTag === undefined) {
            return;
        }

        const html = document.querySelector("html");
        assert(html !== null);
        html.lang = currentLanguageTag;
    }, []);

    const { areAllStyleSheetsLoaded } = useInsertLinkTags({
        componentOrHookName: "Template",
        hrefs: !doUseDefaultCss
            ? []
            : [
                  `${url.resourcesCommonPath}/node_modules/@patternfly/patternfly/patternfly.min.css`,
                  `${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`,
                  `${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
                  `${url.resourcesCommonPath}/lib/pficon/pficon.css`,
                  `${url.resourcesPath}/css/login.css`
              ]
    });

    const { insertScriptTags } = useInsertScriptTags({
        componentOrHookName: "Template",
        scriptTags: [
            {
                type: "module",
                src: `${url.resourcesPath}/js/menu-button-links.js`
            },
            ...(authenticationSession === undefined
                ? []
                : [
                      {
                          type: "module",
                          textContent: [
                              `import { checkCookiesAndSetTimer } from "${url.resourcesPath}/js/authChecker.js";`,
                              ``,
                              `checkCookiesAndSetTimer(`,
                              `  "${authenticationSession.authSessionId}",`,
                              `  "${authenticationSession.tabId}",`,
                              `  "${url.ssoLoginInOtherTabsUrl}"`,
                              `);`
                          ].join("\n")
                      } as const
                  ]),
            ...scripts.map(
                script =>
                    ({
                        type: "text/javascript",
                        src: script
                    }) as const
            )
        ]
    });

    useEffect(() => {
        if (areAllStyleSheetsLoaded) {
            insertScriptTags();
        }
    }, [areAllStyleSheetsLoaded]);

    if (!areAllStyleSheetsLoaded) {
        return null;
    }
    const languageSelector = () => {
        return (
            <div>
                {realm.internationalizationEnabled && (assert(locale !== undefined), locale.supported.length > 1) && (
                    <div className="justify-end">
                        <div id="kc-locale-wrapper" className="flex justify-end">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        tabIndex={1}
                                        variant="secondary"
                                        size="sm"
                                        aria-label={msgStr("languages")}
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        aria-controls="language-switch1"
                                        className="h-10"
                                    >
                                        <div className="flex space-x-2">
                                            <GlobeAltIcon className="h-5 w-5" />
                                            <span>{labelBySupportedLanguageTag[currentLanguageTag]}</span>
                                        </div>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent id="language-switch1" role="menu">
                                    {locale.supported.map(({ languageTag }, i) => (
                                        <DropdownMenuItem key={languageTag} role="none">
                                            <a role="menuitem" id={`language-${i + 1}`} href={getChangeLocaleUrl(languageTag)}>
                                                {labelBySupportedLanguageTag[languageTag]}
                                            </a>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                )}
            </div>
        );
    };
    return (
        <div className="bg-gray-200  min-h-screen   flex flex-col items-center justify-center  prose dark:prose-invert max-w-none">
            <div id="kc-header-wrapper" className="text-center text-foreground scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {msgStr("loginTitleHtml", realm.displayNameHtml)}
            </div>
            <Card className="py-0 px-3  md:-[40rem] shadow-2xl w-full min-h-screen  md:w-[30rem] sm:min-h-fit ">
                <CardContent className="space-y-8 pb-5 ">
                    <div className="flex justify-end space-x-2 pt-2">
                        {languageSelector()}
                        <ModeToggle />
                    </div>
                    <header className="text-center  ">
                        {(() => {
                            const node = !(auth !== undefined && auth.showUsername && !auth.showResetCredentials) ? (
                                <h1 id="kc-page-title">{headerNode}</h1>
                            ) : (
                                <div id="kc-username" className={kcClsx("kcFormGroupClass")}>
                                    <label id="kc-attempted-username">{auth.attemptedUsername}</label>
                                    <a id="reset-login" href={url.loginRestartFlowUrl} aria-label={msgStr("restartLoginTooltip")}>
                                        <div className="kc-login-tooltip">
                                            <i className={kcClsx("kcResetFlowIcon")}></i>
                                            <span className="kc-tooltip-text">{msg("restartLoginTooltip")}</span>
                                        </div>
                                    </a>
                                </div>
                            );

                            if (displayRequiredFields) {
                                return (
                                    <div className="text-sm">
                                        <div className={clsx(kcClsx("kcLabelWrapperClass"), "subtitle")}>
                                            <span className="subtitle">
                                                <span className="required">*</span>
                                                {msg("requiredFields")}
                                            </span>
                                        </div>
                                        <div className="col-md-12">{node}</div>
                                    </div>
                                );
                            }

                            return node;
                        })()}
                    </header>
                    <div id="kc-content" className="">
                        <div id="kc-content-wrapper">
                            {/* App-initiated actions should not see warning messages about the need to complete the action during login. */}
                            {displayMessage && message !== undefined && (message.type !== "warning" || !isAppInitiatedAction) && (
                                <div
                                    className={clsx(
                                        `alert-${message.type}`,
                                        kcClsx("kcAlertClass"),
                                        `pf-m-${message?.type === "error" ? "danger" : message.type}`
                                    )}
                                >
                                    <div className="pf-c-alert__icon">
                                        {message.type === "success" && <span className={kcClsx("kcFeedbackSuccessIcon")}></span>}
                                        {message.type === "warning" && <span className={kcClsx("kcFeedbackWarningIcon")}></span>}
                                        {message.type === "error" && <span className={kcClsx("kcFeedbackErrorIcon")}></span>}
                                        {message.type === "info" && <span className={kcClsx("kcFeedbackInfoIcon")}></span>}
                                    </div>
                                    <span
                                        className="text-sm"
                                        dangerouslySetInnerHTML={{
                                            __html: message.summary
                                        }}
                                    />
                                </div>
                            )}
                            {children}
                            {auth !== undefined && auth.showTryAnotherWayLink && (
                                <form id="kc-select-try-another-way-form" action={url.loginAction} method="post">
                                    <div className={kcClsx("kcFormGroupClass")}>
                                        <input type="hidden" name="tryAnotherWay" value="on" />
                                        <a
                                            href="#"
                                            id="try-another-way"
                                            onClick={() => {
                                                document.forms["kc-select-try-another-way-form" as never].submit();
                                                return false;
                                            }}
                                        >
                                            {msg("doTryAnotherWay")}
                                        </a>
                                    </div>
                                </form>
                            )}
                            {socialProvidersNode}
                        </div>
                    </div>
                    {displayInfo && (
                        <div className=" w-full">
                            <div className=" text-foreground">{infoNode}</div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
