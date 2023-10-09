import { AttributeValueSimple } from "./attr-value"
import { SpecType } from "./spec"

/**
 * Abstract class that all inheriting AttributeDefinitions originate from
 */
export interface AttributeDefinition {
    specType: SpecType
}

/**
 * AttributeDefinitionSimple is meant to represent all of the basic types in
 * ReqIF stemming from the abstract AttributeDefinitionSimple class, including
 * * boolean
 * * Date
 * * Numerics (e.g. Real, Integer)
 * * 
 */
export interface AttributeDefinitionSimple<T> extends AttributeDefinition {
    /**
     * Reference to the data type - probably unnecessary given use of generics
     */
    type: T

    /**
     * Linkage of the owned default value that is used if no attribute value is
     *  supplied by the user of the requirements authoring tool. 
     */
    defaultValue: AttributeValueSimple<T>
}

/**
 * Definition of an enumeration attribute.
 * 
 * TODO - can probably just bake everything into an exported AttributeDefinition
 *  interface and flatten this hierarchy
 */
export interface AttributeDefinitionEnumeration extends AttributeDefinition {
    /**
     * If set to true, this means that the user of a requirements authoring tool
     *  can pick one or more than one of the values in the set of specified values
     *  as an enumeration attribute value.
     * 
     * If set to false, this means that the user of a requirements authoring tool 
     * can pick exactly one of the values in the set of specified values as an
     * enumeration attribute value
     */
    multiValued: boolean
}

export interface AttributeDefinitionXHTML extends AttributeDefinition {
    
}