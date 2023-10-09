import { EnumValue } from "./base"

export interface DatatypeDefinition {
    /**
     * Back reference to containing ReqIFContent element, uncertain if needed
     */
    coreContent: ReqIFContent
}

/**
 * Defines primitive ReqIF datatypes
 */
interface DatatypeDefinitionSimple<T> extends DatatypeDefinition{ // TODO - restrict T to certain types
    
    /**
     * Applies to integer and reals
     */
    max?: number

    /**
     * Applies to integers and reals
     */
    min?: number

    /**
     * Applies to `Real` type objects only
     */
    accuracy?: number

    /**
     * Maximum permissible string length
     */
    maxLength?: number 
}

export interface DatatypeDefinitionEnumeration extends DatatypeDefinition{
    specifiedValues: EnumValue[]
}

/**
 * Data type definition for XHTML formatted data
 */
export interface DatatypeDefinitionXHTML extends DatatypeDefinition{

}
