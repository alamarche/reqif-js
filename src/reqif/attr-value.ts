import { AttributeDefinitionEnumeration, AttributeDefinitionSimple, AttributeDefinitionXHTML } from "./attr-definition"
import { EnumValue } from "./base"
import { SpecElementWithAttributes } from "./spec"

/**
 * Base class for concrete attribute values.
 */
export interface AttributeValue {
    
    /**
     * Not sure how necessary this is... represented as an association in spec
     */
    specElAt: SpecElementWithAttributes

}

/**
 * Base class for concrete attribute values.
 */
export interface AttributeValueSimple<T> extends AttributeValue {
    
    /**
     * The attribute value
     */
    theValue: T

    /**
     * Reference to attribute definition
     */
    definition: AttributeDefinitionSimple<T>

    /**
     * Back linkage of the owning attribute definition
     * 
     * **Unsure what this really means or if it's needed?**
     */
    owningDefinition: AttributeDefinitionSimple<T>
}

/**
 * Definition of an enumeration attribute value.
 */
interface AttributeValueEnumeration extends AttributeValue {
    definition: AttributeDefinitionEnumeration
    owningDefinition: AttributeDefinitionEnumeration
    values: EnumValue[]
}

/**
 * An attribute value with XHTML contents.
 */
interface AttributeValueXHTML extends AttributeValue {
    /**
     * The purpose of the isSimplified attribute is to mark an AttributeValueXHTML element
     *  if an importing tool has been unable to interpret the formatted attribute value and
     *  thus create the possibility to inform users about it. If AttributeValueXHTML elements 
     * are marked that way, importing ReqIF tools SHOULD still display a simplified 
     * version of the attribute value using an external HTML processor, allowing the user to at
     *  least read the information. Tool vendors are strongly encouraged to implement this feature
     */
    isSimplified: boolean
    definition: AttributeDefinitionXHTML
    owningDefinition: AttributeDefinitionXHTML
    theValue: XHTMLContent
    theOriginalValue?: XHTMLContent
}

interface XHTMLContent {}