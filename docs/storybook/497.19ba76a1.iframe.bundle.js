"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[497],{"./src/login/UserProfileFormFields.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>UserProfileFormFields});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),keycloakify_tools_assert__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/keycloakify/tools/assert.js"),keycloakify_login_lib_useUserProfileForm__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/keycloakify/login/lib/useUserProfileForm.js"),_components_ui_input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/input.tsx"),_components_ui_PasswordWrapper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/PasswordWrapper.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UserProfileFormFields(props){const{kcContext,i18n,kcClsx,onIsFormSubmittableValueChange,doMakeUserConfirmPassword,BeforeField,AfterField}=props,{advancedMsg}=i18n,{formState:{formFieldStates,isFormSubmittable},dispatchFormAction}=(0,keycloakify_login_lib_useUserProfileForm__WEBPACK_IMPORTED_MODULE_2__.u)({kcContext,i18n,doMakeUserConfirmPassword});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{onIsFormSubmittableValueChange(isFormSubmittable)}),[isFormSubmittable]);const groupNameRef={current:""};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"prose dark:prose-invert ",children:formFieldStates.map((_ref=>{var _attribute$displayNam;let{attribute,displayableErrors,valueOrValues}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:" my-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(GroupLabel,{attribute,groupNameRef,i18n,kcClsx}),void 0!==BeforeField&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BeforeField,{attribute,dispatchFormAction,displayableErrors,valueOrValues,kcClsx,i18n}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"",style:{display:"password-confirm"!==attribute.name||doMakeUserConfirmPassword?void 0:"none"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"mx-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label",{htmlFor:attribute.name,className:"",children:advancedMsg(null!==(_attribute$displayNam=attribute.displayName)&&void 0!==_attribute$displayNam?_attribute$displayNam:"")}),attribute.required&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"text-danger",children:" *"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:kcClsx("kcInputWrapperClass"),children:[void 0!==attribute.annotations.inputHelperTextBefore&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:kcClsx("kcInputHelperTextBeforeClass"),id:`form-help-text-before-${attribute.name}`,"aria-live":"polite",children:advancedMsg(attribute.annotations.inputHelperTextBefore)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputFieldByType,{attribute,valueOrValues,displayableErrors,dispatchFormAction,kcClsx,i18n}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FieldErrors,{attribute,displayableErrors,kcClsx,fieldIndex:void 0}),void 0!==attribute.annotations.inputHelperTextAfter&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:kcClsx("kcInputHelperTextAfterClass"),id:`form-help-text-after-${attribute.name}`,"aria-live":"polite",children:advancedMsg(attribute.annotations.inputHelperTextAfter)}),void 0!==AfterField&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AfterField,{attribute,dispatchFormAction,displayableErrors,valueOrValues,kcClsx,i18n})]})]})]},attribute.name)})}))})}function GroupLabel(props){var _attribute$group;const{attribute,groupNameRef,i18n,kcClsx}=props,{advancedMsg}=i18n;var _attribute$group$name,_attribute$group2;if((null===(_attribute$group=attribute.group)||void 0===_attribute$group?void 0:_attribute$group.name)!==groupNameRef.current&&(groupNameRef.current=null!==(_attribute$group$name=null===(_attribute$group2=attribute.group)||void 0===_attribute$group2?void 0:_attribute$group2.name)&&void 0!==_attribute$group$name?_attribute$group$name:"",""!==groupNameRef.current))return(0,keycloakify_tools_assert__WEBPACK_IMPORTED_MODULE_1__.v)(void 0!==attribute.group),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:kcClsx("kcFormGroupClass"),...Object.fromEntries(Object.entries(attribute.group.html5DataAnnotations).map((_ref2=>{let[key,value]=_ref2;return[`data-${key}`,value]}))),children:[(_attribute$group$disp=>{const groupDisplayHeader=null!==(_attribute$group$disp=attribute.group.displayHeader)&&void 0!==_attribute$group$disp?_attribute$group$disp:"",groupHeaderText=""!==groupDisplayHeader?advancedMsg(groupDisplayHeader):attribute.group.name;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:kcClsx("kcContentWrapperClass"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label",{id:`header-${attribute.group.name}`,className:kcClsx("kcFormGroupHeader"),children:groupHeaderText})})})(),(_attribute$group$disp2=>{const groupDisplayDescription=null!==(_attribute$group$disp2=attribute.group.displayDescription)&&void 0!==_attribute$group$disp2?_attribute$group$disp2:"";if(""!==groupDisplayDescription){const groupDescriptionText=advancedMsg(groupDisplayDescription);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:kcClsx("kcLabelWrapperClass"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label",{id:`description-${attribute.group.name}`,className:kcClsx("kcLabelClass"),children:groupDescriptionText})})}return null})()]});return null}function FieldErrors(props){const{attribute,fieldIndex,kcClsx}=props,displayableErrors=props.displayableErrors.filter((error=>error.fieldIndex===fieldIndex));return 0===displayableErrors.length?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{id:`input-error-${attribute.name}${void 0===fieldIndex?"":`-${fieldIndex}`}`,className:"text-danger text-md ","aria-live":"polite",children:displayableErrors.filter((error=>error.fieldIndex===fieldIndex)).map(((_ref3,i,arr)=>{let{errorMessage}=_ref3;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[errorMessage,arr.length-1!==i&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]},i)}))})}function InputFieldByType(props){const{attribute,valueOrValues}=props;switch(attribute.annotations.inputType){case"textarea":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TextareaTag,{...props});case"select":case"multiselect":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SelectTag,{...props});case"select-radiobuttons":case"multiselect-checkboxes":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputTagSelects,{...props});default:{if(valueOrValues instanceof Array)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:valueOrValues.map((function(){for(var _len=arguments.length,_ref4=new Array(_len),_key=0;_key<_len;_key++)_ref4[_key]=arguments[_key];let[,i]=_ref4;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputTag,{...props,fieldIndex:i},i)}))});const inputNode=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(InputTag,{...props,fieldIndex:void 0});return"password"===attribute.name||"password-confirm"===attribute.name?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_ui_PasswordWrapper__WEBPACK_IMPORTED_MODULE_4__.b,{kcClsx:props.kcClsx,i18n:props.i18n,passwordInputId:attribute.name,children:inputNode}):inputNode}}}function InputTag(props){var _attribute$html5DataA;const{attribute,fieldIndex,kcClsx,dispatchFormAction,valueOrValues,i18n,displayableErrors}=props,{advancedMsgStr}=i18n;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.p,{type:(()=>{const{inputType}=attribute.annotations;return null!=inputType&&inputType.startsWith("html5-")?inputType.slice(6):null!=inputType?inputType:"text"})(),id:attribute.name,name:attribute.name,value:void 0!==fieldIndex?((0,keycloakify_tools_assert__WEBPACK_IMPORTED_MODULE_1__.v)(valueOrValues instanceof Array),valueOrValues[fieldIndex]):((0,keycloakify_tools_assert__WEBPACK_IMPORTED_MODULE_1__.v)("string"==typeof valueOrValues),valueOrValues),"aria-invalid":void 0!==displayableErrors.find((error=>error.fieldIndex===fieldIndex)),disabled:attribute.readOnly,autoComplete:attribute.autocomplete,placeholder:void 0===attribute.annotations.inputTypePlaceholder?void 0:advancedMsgStr(attribute.annotations.inputTypePlaceholder),pattern:attribute.annotations.inputTypePattern,size:void 0===attribute.annotations.inputTypeSize?void 0:parseInt(`${attribute.annotations.inputTypeSize}`),maxLength:void 0===attribute.annotations.inputTypeMaxlength?void 0:parseInt(`${attribute.annotations.inputTypeMaxlength}`),minLength:void 0===attribute.annotations.inputTypeMinlength?void 0:parseInt(`${attribute.annotations.inputTypeMinlength}`),max:attribute.annotations.inputTypeMax,min:attribute.annotations.inputTypeMin,step:attribute.annotations.inputTypeStep,...Object.fromEntries(Object.entries(null!==(_attribute$html5DataA=attribute.html5DataAnnotations)&&void 0!==_attribute$html5DataA?_attribute$html5DataA:{}).map((_ref5=>{let[key,value]=_ref5;return[`data-${key}`,value]}))),onChange:event=>dispatchFormAction({action:"update",name:attribute.name,valueOrValues:void 0!==fieldIndex?((0,keycloakify_tools_assert__WEBPACK_IMPORTED_MODULE_1__.v)(valueOrValues instanceof Array),valueOrValues.map(((value,i)=>i===fieldIndex?event.target.value:value))):event.target.value}),onBlur:()=>dispatchFormAction({action:"focus lost",name:attribute.name,fieldIndex})}),(()=>{if(void 0===fieldIndex)return null;(0,keycloakify_tools_assert__WEBPACK_IMPORTED_MODULE_1__.v)(valueOrValues instanceof Array);const values=valueOrValues;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FieldErrors,{attribute,kcClsx,displayableErrors,fieldIndex}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AddRemoveButtonsMultiValuedAttribute,{attribute,values,fieldIndex,dispatchFormAction,i18n})]})})()]})}function AddRemoveButtonsMultiValuedAttribute(props){const{attribute,values,fieldIndex,dispatchFormAction,i18n}=props,{msg}=i18n,{hasAdd,hasRemove}=(0,keycloakify_login_lib_useUserProfileForm__WEBPACK_IMPORTED_MODULE_2__.v)({attribute,values,fieldIndex}),idPostfix=`-${attribute.name}-${fieldIndex+1}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[hasRemove&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{id:`kc-remove${idPostfix}`,type:"button",className:"pf-c-button pf-m-inline pf-m-link",onClick:()=>dispatchFormAction({action:"update",name:attribute.name,valueOrValues:values.filter(((_,i)=>i!==fieldIndex))}),children:msg("remove")}),hasAdd?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:" | "}):null]}),hasAdd&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{id:`kc-add${idPostfix}`,type:"button",className:"pf-c-button pf-m-inline pf-m-link",onClick:()=>dispatchFormAction({action:"update",name:attribute.name,valueOrValues:[...values,""]}),children:msg("addValue")})]})}function InputTagSelects(props){const{attribute,dispatchFormAction,kcClsx,valueOrValues}=props,{advancedMsg}=props.i18n,{classDiv,classInput,classLabel,inputType}=(()=>{const{inputType}=attribute.annotations;switch((0,keycloakify_tools_assert__WEBPACK_IMPORTED_MODULE_1__.v)("select-radiobuttons"===inputType||"multiselect-checkboxes"===inputType),inputType){case"select-radiobuttons":return{inputType:"radio",classDiv:kcClsx("kcInputClassRadio"),classInput:kcClsx("kcInputClassRadioInput"),classLabel:kcClsx("kcInputClassRadioLabel")};case"multiselect-checkboxes":return{inputType:"checkbox",classDiv:kcClsx("kcInputClassCheckbox"),classInput:kcClsx("kcInputClassCheckboxInput"),classLabel:kcClsx("kcInputClassCheckboxLabel")}}})(),options=((_attribute$validators,_attribute$validators2)=>{walk:{const{inputOptionsFromValidation}=attribute.annotations;if(void 0===inputOptionsFromValidation)break walk;const validator=attribute.validators[inputOptionsFromValidation];if(void 0!==validator&&void 0!==validator.options)return validator.options}return null!==(_attribute$validators=null===(_attribute$validators2=attribute.validators.options)||void 0===_attribute$validators2?void 0:_attribute$validators2.options)&&void 0!==_attribute$validators?_attribute$validators:[]})();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:options.map((option=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:classDiv,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:inputType,id:`${attribute.name}-${option}`,name:attribute.name,value:option,className:classInput,"aria-invalid":0!==props.displayableErrors.length,disabled:attribute.readOnly,checked:valueOrValues instanceof Array?valueOrValues.includes(option):valueOrValues===option,onChange:event=>dispatchFormAction({action:"update",name:attribute.name,valueOrValues:(()=>{const isChecked=event.target.checked;if(valueOrValues instanceof Array){const newValues=[...valueOrValues];return isChecked?newValues.push(option):newValues.splice(newValues.indexOf(option),1),newValues}return event.target.checked?option:""})()}),onBlur:()=>dispatchFormAction({action:"focus lost",name:attribute.name,fieldIndex:void 0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label",{htmlFor:`${attribute.name}-${option}`,className:`${classLabel}${attribute.readOnly?` ${kcClsx("kcInputClassRadioCheckboxLabelDisabled")}`:""}`,children:advancedMsg(option)})]},option)))})}function TextareaTag(props){const{attribute,dispatchFormAction,kcClsx,displayableErrors,valueOrValues}=props;(0,keycloakify_tools_assert__WEBPACK_IMPORTED_MODULE_1__.v)("string"==typeof valueOrValues);const value=valueOrValues;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea",{id:attribute.name,name:attribute.name,className:kcClsx("kcInputClass"),"aria-invalid":0!==displayableErrors.length,disabled:attribute.readOnly,cols:void 0===attribute.annotations.inputTypeCols?void 0:parseInt(`${attribute.annotations.inputTypeCols}`),rows:void 0===attribute.annotations.inputTypeRows?void 0:parseInt(`${attribute.annotations.inputTypeRows}`),maxLength:void 0===attribute.annotations.inputTypeMaxlength?void 0:parseInt(`${attribute.annotations.inputTypeMaxlength}`),value,onChange:event=>dispatchFormAction({action:"update",name:attribute.name,valueOrValues:event.target.value}),onBlur:()=>dispatchFormAction({action:"focus lost",name:attribute.name,fieldIndex:void 0})})}function SelectTag(props){const{attribute,dispatchFormAction,kcClsx,displayableErrors,i18n,valueOrValues}=props,{advancedMsgStr}=i18n,isMultiple="multiselect"===attribute.annotations.inputType;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select",{id:attribute.name,name:attribute.name,className:kcClsx("kcInputClass"),"aria-invalid":0!==displayableErrors.length,disabled:attribute.readOnly,multiple:isMultiple,size:void 0===attribute.annotations.inputTypeSize?void 0:parseInt(`${attribute.annotations.inputTypeSize}`),value:valueOrValues,onChange:event=>dispatchFormAction({action:"update",name:attribute.name,valueOrValues:isMultiple?Array.from(event.target.selectedOptions).map((option=>option.value)):event.target.value}),onBlur:()=>dispatchFormAction({action:"focus lost",name:attribute.name,fieldIndex:void 0}),children:[!isMultiple&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option",{value:""}),((_attribute$validators3,_attribute$validators4)=>{walk:{const{inputOptionsFromValidation}=attribute.annotations;if(void 0===inputOptionsFromValidation)break walk;(0,keycloakify_tools_assert__WEBPACK_IMPORTED_MODULE_1__.v)("string"==typeof inputOptionsFromValidation);const validator=attribute.validators[inputOptionsFromValidation];if(void 0!==validator&&void 0!==validator.options)return validator.options}return null!==(_attribute$validators3=null===(_attribute$validators4=attribute.validators.options)||void 0===_attribute$validators4?void 0:_attribute$validators4.options)&&void 0!==_attribute$validators3?_attribute$validators3:[]})().map((option=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option",{value:option,children:(()=>{if(void 0!==attribute.annotations.inputOptionLabels){var _inputOptionLabels$op;const{inputOptionLabels}=attribute.annotations;return advancedMsgStr(null!==(_inputOptionLabels$op=inputOptionLabels[option])&&void 0!==_inputOptionLabels$op?_inputOptionLabels$op:option)}return void 0!==attribute.annotations.inputOptionLabelsI18nPrefix?advancedMsgStr(`${attribute.annotations.inputOptionLabelsI18nPrefix}.${option}`):option})()},option)))]})}UserProfileFormFields.__docgenInfo={description:'Renders each form field by looping through formFieldStates:\r\n\r\nformFieldStates.map(({ attribute, displayableErrors, valueOrValues }) => {\r\n  ├─ GroupLabel (optional): Displays the group header if the field belongs to a group.\r\n  ├─ BeforeField (optional): Custom component rendered before the form field.\r\n  ├─ Form Field\r\n  │   ├─ Label: Displays the field\'s name (e.g., "Username", "Email").\r\n  │   ├─ Input Field (dynamic based on field type):\r\n  │   │   ├─ InputTag: Standard input fields like text, email, etc.\r\n  │   │   ├─ TextareaTag: For textarea fields.\r\n  │   │   ├─ SelectTag: For dropdown/select fields.\r\n  │   │   ├─ InputTagSelects: For radio buttons or checkboxes.\r\n  │   │   └─ PasswordWrapper: For password fields with show/hide functionality.\r\n  │   └─ Helper Text (optional): Additional information displayed before or after the input field.\r\n  ├─ FieldErrors (optional): Displays validation errors for the current field.\r\n  ├─ AddRemoveButtonsMultiValuedAttribute (optional): Add/Remove buttons for multiple values in the field.\r\n  └─ AfterField (optional): Custom component rendered after the form field.\r\n})',methods:[],displayName:"UserProfileFormFields"}}}]);