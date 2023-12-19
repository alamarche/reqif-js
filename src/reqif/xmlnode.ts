
export interface XMLNode {
    tag: string
    properties?: Map<string, string>
    contents?: string | XMLNode[]

    toXML(): string
}

/**
 * ada
 */
export class DefaultXMLNode implements XMLNode {
    tag:string
    properties:Map<string,string> | undefined
    contents: string | XMLNode[] | undefined

    constructor(tag:string, properties?:Map<string, string>, contents?:string | XMLNode[]) {
        this.tag = tag
        this.contents = contents
        this.properties = properties
    }

    /**
     * 
     * @returns XML-encoded string representing the XML node and all enclosed nodes
     */
    toXML(): string {

        let propertyStrs:string[] = []
        let contentNodeStrs: string[] = []
        let output:string = ""

        // Shortcut for converting to XML if no contents
        if (this.properties === undefined && this.contents === undefined) {
            return `<${this.tag}></${this.tag}>`
        } 

        // If properties are supplied (XMLNode[])
        if (this.properties !== undefined) {
            if (this.properties.size > 0) {
                this.properties.forEach((v, k, m) => {
                    propertyStrs = propertyStrs.concat(` ${k}="${v}"`)
                })
            }
        }
        
        // If contents is just a simple string
        if (typeof this.contents === "string") {
            return `<${this.tag}${propertyStrs.join("")}>${this.contents}</${this.tag}>`

        } else if (this.contents !== undefined) { // If the content is more XML nodes
            this.contents.forEach((node, i) => {
                contentNodeStrs = contentNodeStrs.concat(node.toXML())
            })
            return `<${this.tag}${propertyStrs.join("")}>${contentNodeStrs.join('\n')}</${this.tag}>`
        }

        return output
    }
}

