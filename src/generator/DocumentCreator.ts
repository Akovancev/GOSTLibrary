import {
    Document,
    Paragraph,
    TextRun
} from 'docx';
import { GOST_2018 } from '../core/constants/RULES_CODES';
import getFormatStringBibTex from './formats/BibTex/BibTex';
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

    public createTexFormat({ sources }: any): any {
        const children = sources.map((source: object, index: number) => (getFormatStringBibTex(source, index) as string).split(',')).flat()
        // sources.map((source: object) => new Paragraph({
        //     children: (getFormatStringBibTex(source) as string).split(',').map((value: any) => new Paragraph({
        //         children: [new TextRun({
        //             text: `${value},`,
        //             font: "Times New Roman",
        //             size: 28
        //         })],
        //     }))
        // }))
        return new Document({
            sections: [{
                children: children.map((value: string) => new Paragraph({
                    children: [new TextRun({
                        text: `${value},`,
                        font: "Times New Roman",
                        size: 28
                    })],
                }))
            }]
        })
    }
}