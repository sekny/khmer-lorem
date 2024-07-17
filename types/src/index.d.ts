import { LoremFormat } from "./constants/formats";
import { LoremUnit } from "./constants/units";
import { IPrng } from "./lib/generator";
import KhmerLorem from "./lib/KhmerLorem";
export interface IKhmerLoremParams {
    count?: number;
    format?: LoremFormat;
    paragraphLowerBound?: number;
    paragraphUpperBound?: number;
    random?: IPrng;
    sentenceLowerBound?: number;
    sentenceUpperBound?: number;
    units?: LoremUnit;
    words?: string[];
    suffix?: string;
}
declare const khmerLorem: ({ count, format, paragraphLowerBound, paragraphUpperBound, random, sentenceLowerBound, sentenceUpperBound, units, words, suffix, }?: IKhmerLoremParams) => string;
export { khmerLorem as khmerLorem, KhmerLorem as KhmerLorem };
