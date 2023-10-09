import { DatatypeDefinitionEnumeration } from "./datatype-definition"

/**
 * Class representing additional information related to enumeration literals
 */
export interface EmbeddedValue {
    /**
     * Numerical value corresponding to the enumeration literal
     */
    key: number

    /**
     * Arbitrary additional information related to the enumeration literal
     */
    otherContent: string

    /**
     * Back linkage to the owning EnumValue class.
     */
    enumValue: EnumValue
}

/**
 * Class representing enumeration literals.
 */
export interface EnumValue {

    /**
     * Back linkage to the owning DatatypeDefinitionEnumeration class.
     */
    dataTpeDefEnum: DatatypeDefinitionEnumeration
    
    /**
     * Link to owned EmbeddedValue.
     */
    properties: EmbeddedValue
}

/**
 * Information elements in an Exchange Document are distinguished through
 *  global unique identifiers (Identifiable elements), which are assigned 
 * during the creation of the information element. After assignment, these
 * identifiers must not be altered during the lifetime of the information 
 * element, nor reused for any different information element. These identifiers
 * allow the unique identification of information elements, even across several
 * exchange documents.
 */
export interface Identifiable {
    desc: string
    id: string
    lastChanged: Date
    longName: string
    alternateID: AlternativeID
}

/**
 * Using these identifiers, elements of the specification that have been modified
 *  in a requirements authoring tool of an exchange partner can be updated in the 
 * requirements authoring tool where they had originally been created. In cases where 
 * a tool is unable to handle the original element identifiers, the original identifier
 *  may be complemented with a tool-specific alternative identifier (AlternativeID element)
 */
interface AlternativeID {
    id: string
}
