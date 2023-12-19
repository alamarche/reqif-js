import { v4 } from "uuid"
import { DefaultXMLNode, XMLNode } from "./xmlnode"

/**
 * Class representing a THE-HEADER and REQ-IF-HEADER objects
 * 
 * for some reason both are in the spec.
 */
export class HeaderReqIFNode extends DefaultXMLNode {

    /**
     * @param title Name of the ReqIF document
     * @param identifier (optional) provided UUIDv4 representing the document - one is generated
     * @param comment (optional) comment associated with the Exchange Document as a whole. 
     * @param repositoryID (optional) Unique identifier of the repository containing the requirements that have been exported. Examples for repositoryID: databaseId, URL.
     * @param creationTime (optional) Time of creation of the exchange XML document in the format “dateTime” CCYY-MM-DDThh:mm:ss with optional time zone indicator as a suffix ±hh:mm. Example: 2005-03-04T10:24:18+01:00 (MET time zone)
     * @param sourceToolId (optional) Identifier of the exporting requirements management tool.
     * @param reqifToolId (optional) Identifier of the exporting ReqIF tool.
     * @param reqifVersion (optional) ReqIF interchange format and protocol version - should almost never be supplied, always 1.0
     */
    constructor(
                    title: string,
                    identifier?: string,
                    comment?: string,
                    repositoryID?: string,
                    creationTime?: string,
                    sourceToolId?: string,
                    reqifToolId?: string,
                    reqifVersion?: string,
    ) {

        // Prepare nodes that always need to be present even if not in constructor params
        let childrenNodes: Array<XMLNode> = [
            new DefaultXMLNode("CREATION-TIME", undefined, creationTime ? creationTime : Date.now().toLocaleString()),
            new DefaultXMLNode("TITLE", undefined, title),
            new DefaultXMLNode("REQ-IF-VERSION", undefined, reqifVersion ? reqifVersion : "1.0"),
            new DefaultXMLNode("SOURCE-TOOL-ID", undefined, sourceToolId ? sourceToolId : "github.com/alamarche/reqif-js"),
            new DefaultXMLNode("REQ-IF-TOOL-ID", undefined, reqifToolId ? reqifToolId : "github.com/alamarche/reqif-js"),
        ]

        
        // Add optional ReqIF nodes if they exist
        if (comment) childrenNodes = childrenNodes.concat(new DefaultXMLNode("COMMENT", undefined, comment))
        if (repositoryID) childrenNodes = childrenNodes.concat(new DefaultXMLNode("REPOSITORY-ID", undefined, repositoryID))
        
        let properties: Map<string, string> = new Map<string,string>([["IDENTIFIER", identifier ? identifier : v4()]])

        super("THE-HEADER", properties, childrenNodes)
                
        let reqifHeader = new DefaultXMLNode(
                                        "REQ-IF-HEADER", 
                                        properties,
                                        childrenNodes
        )

        // TODO - this should be a map so that programmatic access to the contents is more facile - 
        // requires modification of reqifHeader and related objects
        this.contents = [
            new DefaultXMLNode("THE-HEADER", 
                                undefined, 
                                [reqifHeader]
            )
        ]
    }
}