import {
    Document,
    Paragraph,
    TextRun
} from 'docx';
import { BibLatexParser } from 'biblatex-csl-converter-ts';

import { GOST_2018 } from '../core/constants/RULES_CODES';
import getFormatStringGOST2018 from './formats/GOST-2018/GOST-2018';

export class DocumentCreator {
    private getFormatFnByCode(ruleCode: string): Function {
        switch (ruleCode) {
            case GOST_2018: return getFormatStringGOST2018;
            default: return () => { };
        };
    }

    public getFormatStringByCode({ source, ruleCode }: any): Document {
        const formatFn = this.getFormatFnByCode(ruleCode);
        return formatFn(source);
    }

    public createWordFormat({ sources, ruleCode }: any): Document {
        const formatFn = this.getFormatFnByCode(ruleCode);
        console.log('qq');
        return new Document({
            sections: [{
                children: sources.map((v: object, index: number) => new Paragraph({
                    children: [new TextRun({
                        text: `\t${index + 1}. ${formatFn(v)}`,
                        font: "Times New Roman",
                        size: 28
                    })
                    ],
                }))
            }]
        })
    }

    public createTexFormat({ sources, ruleCode }: any): any {
        let parser = new BibLatexParser('');
        return parser;
    }
}