import { LoremFormat } from "../constants/formats";
import Generator, { IGeneratorOptions } from "./generator";
declare class KhmerLorem {
    format: LoremFormat;
    suffix?: string | undefined;
    generator: Generator;
    constructor(options?: IGeneratorOptions, format?: LoremFormat, suffix?: string | undefined);
    getLineEnding(): string;
    formatString(str: string): string;
    formatStrings(strings: string[]): string[];
    generateWords(num?: number): string;
    generateSentences(num?: number): string;
    generateParagraphs(num: number): string;
}
export default KhmerLorem;
