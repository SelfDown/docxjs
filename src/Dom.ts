
namespace docx {

    export enum DomType {
        Document,
        Paragraph,
        Run,
        Break,
        Table,
        Row,
        Cell
    }

    export interface IDomElement {
        domType: DomType;
        children?: IDomElement[];
        style?: IDomStyleValues;
        className?: string;
    }

    export interface IDomParagraph extends IDomElement {
        numberingId?: string;
        numberingLevel?: string;
    }

    export interface IDomRun extends IDomElement {
        break?: string;
        text?: string;
    }

    export interface IDomTable extends IDomElement {
        columns?: IDomTableColumn[];
        cellStyle?: IDomStyleValues;
    }

    export interface IDomTableCell extends IDomElement {
        span?: number;
    }

    export interface IDomDocument extends IDomElement {
    }

    export interface IDomTableColumn {
        width?: string;
    }

    export interface IDomStyle {
        id: string;
        target: string;
        basedOn?: string;
        isDefault?: boolean;
        styles: IDomSubStyle[];
    }

    export interface IDomSubStyle {
        target: string;
        values: IDomStyleValues;
    }

    export interface IDomStyleValues {
        [name: string]: string;
    }
}
