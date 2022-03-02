export interface Pages {
    pages:               Page[];
    showCompletedPage:   boolean;
    showQuestionNumbers: string;
    showProgressBar:     string;
    goNextPageAutomatic: boolean;
    pagePrevText:        string;
    pageNextText:        string;
    requiredText:        string;
}

export interface Page {
    name:     string;
    elements: PageElement[];
}

export interface PageElement {
    type:       ElementType;
    name:       string;
    elements?:  PurpleElement[];
    visibleIf?: string;
    html?:      string;
    title?:     string;
}

export interface PurpleElement {
    type:           ElementType;
    name:           string;
    html?:          string;
    visibleIf?:     string;
    titleLocation?: TitleLocation;
    choices?:       PurpleChoice[];
    elements?:      FluffyElement[];
    title?:         string;
    isRequired?:    boolean;
    description?:   Description;
    validators?:    Validator[];
    defaultValue?:  DefaultValue;
    placeHolder?:   DefaultValue;
    inputType?:     string;
    columns?:       Column[];
    cellType?:      CellType;
    rows?:          Row[];
}

export enum CellType {
    Boolean = "boolean",
    Text = "text",
}

export interface PurpleChoice {
    value:      string;
    text:       string;
    visibleIf?: string;
}

export interface Column {
    name:          Name;
    title:         Title;
    cellType:      CellType;
    validators?:   Validator[];
    placeHolder?:  DefaultValue;
    enableIf?:     EnableIf;
    defaultValue?: string;
}

export enum EnableIf {
    BROTHERDEATHAGEEmptyAndRowEndEmpty = "{BROTHER_DEATH_AGE} empty and {row.end} empty",
    DAUGHTERDEATHAGEEmptyAndRowEndEmpty = "{DAUGHTER_DEATH_AGE} empty and {row.end} empty",
    FATHERDEATHAGEEmptyAndRowEndEmpty = "{FATHER_DEATH_AGE} empty and {row.end} empty",
    MATERNALAUNTDEATHAGEEmptyAndRowEndEmpty = "{MATERNAL_AUNT_DEATH_AGE} empty and {row.end} empty",
    MATERNALGRANDFATHERDEATHAGEEmptyAndRowEndEmpty = "{MATERNAL_GRANDFATHER_DEATH_AGE} empty and {row.end} empty",
    MATERNALGRANDMOTHERDEATHAGEEmptyAndRowEndEmpty = "{MATERNAL_GRANDMOTHER_DEATH_AGE} empty and {row.end} empty",
    MATERNALUNCLEDEATHAGEEmptyAndRowEndEmpty = "{MATERNAL_UNCLE_DEATH_AGE} empty and {row.end} empty",
    MOTHERDEATHAGEEmptyAndRowEndEmpty = "{MOTHER_DEATH_AGE} empty and {row.end} empty",
    PATERNALAUNTDEATHAGEEmptyAndRowEndEmpty = "{PATERNAL_AUNT_DEATH_AGE} empty and {row.end} empty",
    PATERNALGRANDFATHERDEATHAGEEmptyAndRowEndEmpty = "{PATERNAL_GRANDFATHER_DEATH_AGE} empty and {row.end} empty",
    PATERNALGRANDMOTHERDEATHAGEEmptyAndRowEndEmpty = "{PATERNAL_GRANDMOTHER_DEATH_AGE} empty and {row.end} empty",
    PATERNALUNCLEDEATHAGEEmptyAndRowEndEmpty = "{PATERNAL_UNCLE_DEATH_AGE} empty and {row.end} empty",
    RowEndEmpty = "{row.end} empty",
    RowOngoingFalse = "{row.ongoing} = false",
    SECONDBROTHERDEATHAGEEmptyAndRowEndEmpty = "{SECOND_BROTHER_DEATH_AGE} empty and {row.end} empty",
    SECONDDAUGHTERDEATHAGEEmptyAndRowEndEmpty = "{SECOND_DAUGHTER_DEATH_AGE} empty and {row.end} empty",
    SECONDMATERNALAUNTDEATHAGEEmptyAndRowEndEmpty = "{SECOND_MATERNAL_AUNT_DEATH_AGE} empty and {row.end} empty",
    SECONDMATERNALUNCLEAUNTDEATHAGEEmptyAndRowEndEmpty = "{SECOND_MATERNAL_UNCLE_AUNT_DEATH_AGE} empty and {row.end} empty",
    SECONDMATERNALUNCLEDEATHAGEEmptyAndRowEndEmpty = "{SECOND_MATERNAL_UNCLE_DEATH_AGE} empty and {row.end} empty",
    SECONDPATERNALAUNTDEATHAGEEmptyAndRowEndEmpty = "{SECOND_PATERNAL_AUNT_DEATH_AGE} empty and {row.end} empty",
    SECONDPATERNALUNCLEDEATHAGEEmptyAndRowEndEmpty = "{SECOND_PATERNAL_UNCLE_DEATH_AGE} empty and {row.end} empty",
    SECONDSISTERDEATHAGEEmptyAndRowEndEmpty = "{SECOND_SISTER_DEATH_AGE} empty and {row.end} empty",
    SECONDSONDEATHAGEEmptyAndRowEndEmpty = "{SECOND_SON_DEATH_AGE} empty and {row.end} empty",
    SISTERDEATHAGEEmptyAndRowEndEmpty = "{SISTER_DEATH_AGE} empty and {row.end} empty",
    SONDEATHAGEEmptyAndRowEndEmpty = "{SON_DEATH_AGE} empty and {row.end} empty",
}

export enum Name {
    End = "end",
    Ongoing = "ongoing",
    Start = "start",
}

export enum DefaultValue {
    Yyyy = "YYYY",
}

export enum Title {
    End = "End",
    Ongoing = "Ongoing",
    Start = "Start",
}

export interface Validator {
    type:       ValidatorType;
    text:       Text;
    expression: string;
}

export enum Text {
    PleaseEnterAValidAge = "Please enter a valid age",
    PleaseEnterAValidYear = "Please enter a valid year",
    PleaseEnterAValidYearOfEndIllness = "Please enter a valid year of end Illness",
    PleaseEnterAValidYearOfStartIllness = "Please enter a valid year of start Illness",
}

export enum ValidatorType {
    Expression = "expression",
}

export enum Description {
    IfYouDonTKnowGiveYourBestGuess = "If you don't know, give your best guess",
    SelectAllThatApply = "Select all that apply.",
}

export interface FluffyElement {
    type:      ElementType;
    name:      string;
    visibleIf: string;
    title:     string;
    choices:   FluffyChoice[];
}

export interface FluffyChoice {
    value: string;
    text:  string;
}

export enum ElementType {
    Checkbox = "checkbox",
    HTML = "html",
    Matrixdropdown = "matrixdropdown",
    Panel = "panel",
    Radiogroup = "radiogroup",
    Text = "text",
}

export interface Row {
    value:     number | string;
    text:      string;
    visibleIf: string;
}

export enum TitleLocation {
    Hidden = "hidden",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toPages(json: string): Pages {
        return cast(JSON.parse(json), r("Pages"));
    }

    public static pagesToJson(value: Pages): string {
        return JSON.stringify(uncast(value, r("Pages")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Pages": o([
        { json: "pages", js: "pages", typ: a(r("Page")) },
        { json: "showCompletedPage", js: "showCompletedPage", typ: true },
        { json: "showQuestionNumbers", js: "showQuestionNumbers", typ: "" },
        { json: "showProgressBar", js: "showProgressBar", typ: "" },
        { json: "goNextPageAutomatic", js: "goNextPageAutomatic", typ: true },
        { json: "pagePrevText", js: "pagePrevText", typ: "" },
        { json: "pageNextText", js: "pageNextText", typ: "" },
        { json: "requiredText", js: "requiredText", typ: "" },
    ], false),
    "Page": o([
        { json: "name", js: "name", typ: "" },
        { json: "elements", js: "elements", typ: a(r("PageElement")) },
    ], false),
    "PageElement": o([
        { json: "type", js: "type", typ: r("ElementType") },
        { json: "name", js: "name", typ: "" },
        { json: "elements", js: "elements", typ: u(undefined, a(r("PurpleElement"))) },
        { json: "visibleIf", js: "visibleIf", typ: u(undefined, "") },
        { json: "html", js: "html", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
    ], false),
    "PurpleElement": o([
        { json: "type", js: "type", typ: r("ElementType") },
        { json: "name", js: "name", typ: "" },
        { json: "html", js: "html", typ: u(undefined, "") },
        { json: "visibleIf", js: "visibleIf", typ: u(undefined, "") },
        { json: "titleLocation", js: "titleLocation", typ: u(undefined, r("TitleLocation")) },
        { json: "choices", js: "choices", typ: u(undefined, a(r("PurpleChoice"))) },
        { json: "elements", js: "elements", typ: u(undefined, a(r("FluffyElement"))) },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "isRequired", js: "isRequired", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, r("Description")) },
        { json: "validators", js: "validators", typ: u(undefined, a(r("Validator"))) },
        { json: "defaultValue", js: "defaultValue", typ: u(undefined, r("DefaultValue")) },
        { json: "placeHolder", js: "placeHolder", typ: u(undefined, r("DefaultValue")) },
        { json: "inputType", js: "inputType", typ: u(undefined, "") },
        { json: "columns", js: "columns", typ: u(undefined, a(r("Column"))) },
        { json: "cellType", js: "cellType", typ: u(undefined, r("CellType")) },
        { json: "rows", js: "rows", typ: u(undefined, a(r("Row"))) },
    ], false),
    "PurpleChoice": o([
        { json: "value", js: "value", typ: "" },
        { json: "text", js: "text", typ: "" },
        { json: "visibleIf", js: "visibleIf", typ: u(undefined, "") },
    ], false),
    "Column": o([
        { json: "name", js: "name", typ: r("Name") },
        { json: "title", js: "title", typ: r("Title") },
        { json: "cellType", js: "cellType", typ: r("CellType") },
        { json: "validators", js: "validators", typ: u(undefined, a(r("Validator"))) },
        { json: "placeHolder", js: "placeHolder", typ: u(undefined, r("DefaultValue")) },
        { json: "enableIf", js: "enableIf", typ: u(undefined, r("EnableIf")) },
        { json: "defaultValue", js: "defaultValue", typ: u(undefined, "") },
    ], false),
    "Validator": o([
        { json: "type", js: "type", typ: r("ValidatorType") },
        { json: "text", js: "text", typ: r("Text") },
        { json: "expression", js: "expression", typ: "" },
    ], false),
    "FluffyElement": o([
        { json: "type", js: "type", typ: r("ElementType") },
        { json: "name", js: "name", typ: "" },
        { json: "visibleIf", js: "visibleIf", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "choices", js: "choices", typ: a(r("FluffyChoice")) },
    ], false),
    "FluffyChoice": o([
        { json: "value", js: "value", typ: "" },
        { json: "text", js: "text", typ: "" },
    ], false),
    "Row": o([
        { json: "value", js: "value", typ: u(0, "") },
        { json: "text", js: "text", typ: "" },
        { json: "visibleIf", js: "visibleIf", typ: "" },
    ], false),
    "CellType": [
        "boolean",
        "text",
    ],
    "EnableIf": [
        "{BROTHER_DEATH_AGE} empty and {row.end} empty",
        "{DAUGHTER_DEATH_AGE} empty and {row.end} empty",
        "{FATHER_DEATH_AGE} empty and {row.end} empty",
        "{MATERNAL_AUNT_DEATH_AGE} empty and {row.end} empty",
        "{MATERNAL_GRANDFATHER_DEATH_AGE} empty and {row.end} empty",
        "{MATERNAL_GRANDMOTHER_DEATH_AGE} empty and {row.end} empty",
        "{MATERNAL_UNCLE_DEATH_AGE} empty and {row.end} empty",
        "{MOTHER_DEATH_AGE} empty and {row.end} empty",
        "{PATERNAL_AUNT_DEATH_AGE} empty and {row.end} empty",
        "{PATERNAL_GRANDFATHER_DEATH_AGE} empty and {row.end} empty",
        "{PATERNAL_GRANDMOTHER_DEATH_AGE} empty and {row.end} empty",
        "{PATERNAL_UNCLE_DEATH_AGE} empty and {row.end} empty",
        "{row.end} empty",
        "{row.ongoing} = false",
        "{SECOND_BROTHER_DEATH_AGE} empty and {row.end} empty",
        "{SECOND_DAUGHTER_DEATH_AGE} empty and {row.end} empty",
        "{SECOND_MATERNAL_AUNT_DEATH_AGE} empty and {row.end} empty",
        "{SECOND_MATERNAL_UNCLE_AUNT_DEATH_AGE} empty and {row.end} empty",
        "{SECOND_MATERNAL_UNCLE_DEATH_AGE} empty and {row.end} empty",
        "{SECOND_PATERNAL_AUNT_DEATH_AGE} empty and {row.end} empty",
        "{SECOND_PATERNAL_UNCLE_DEATH_AGE} empty and {row.end} empty",
        "{SECOND_SISTER_DEATH_AGE} empty and {row.end} empty",
        "{SECOND_SON_DEATH_AGE} empty and {row.end} empty",
        "{SISTER_DEATH_AGE} empty and {row.end} empty",
        "{SON_DEATH_AGE} empty and {row.end} empty",
    ],
    "Name": [
        "end",
        "ongoing",
        "start",
    ],
    "DefaultValue": [
        "YYYY",
    ],
    "Title": [
        "End",
        "Ongoing",
        "Start",
    ],
    "Text": [
        "Please enter a valid age",
        "Please enter a valid year",
        "Please enter a valid year of end Illness",
        "Please enter a valid year of start Illness",
    ],
    "ValidatorType": [
        "expression",
    ],
    "Description": [
        "If you don't know, give your best guess",
        "Select all that apply.",
    ],
    "ElementType": [
        "checkbox",
        "html",
        "matrixdropdown",
        "panel",
        "radiogroup",
        "text",
    ],
    "TitleLocation": [
        "hidden",
    ],
};
