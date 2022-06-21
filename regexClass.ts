export class RegexClass{
    private REGEX_CLASS: RegExp = /^[ACP][0-9]{4,}[G-M]$/
    public validate(regex: string): boolean{
        return this.REGEX_CLASS.test(regex);
    }
}