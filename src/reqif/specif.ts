import { AttributeDefinition } from "./attr-definition.js"
import { AttributeValue } from "./attr-value.js"
import { Identifiable } from "./base.js"
import { DatatypeDefinition } from "./datatype-definition.js"

/**
 * Core content root
 */
export interface ReqIFContent {

    datatypes?: DatatypeDefinition[]

    /**
     * Linking back to the Exchange Document root element.
     */
    documentRoot: ReqIFContent
    specifications?: Specification[]
    specObjects?: SpecObject[]
    specRelationGroups?: RelationGroup[]
    specRelations?: SpecRelation[]
    specTypes?: SpecType[]
}

/**
 * Represents a node in a hierarchically structured requirements specification. 
 */
interface SpecHierarchy { // TODO --> ??extends AccessControlledElement {
    /**
     * Some requirements authoring tools enable the user to use tables as part of a
     *  requirement’s content, where parts of the table represent requirements as well. 
     * If that is the case, this attribute needs to be set to true for the root node of 
     * the table hierarchy and all descendant SpecHierarchy nodes. 
     */
    isTableInternal?: boolean

    /**
     * Down links to next level of owned SpecHierarchy
     */
    children?: SpecHierarchy[]

    /**
     * The attributes whose values are editable for the SpecHierarchy by a tool user
     */
    editableAtts?: AttributeDefinition[]
    
    /**
     * Up link to previous level of SpecHierarchy (which owns this level).
     */
    parent?: SpecHierarchy

    /**
     * Up link to specification hierarchy root (which may own this level)
     */
    root?: Specification

    /**
     * Pointer to the associated SpecObject.
     */
    object: SpecObject
}


/**
 * 
 */
export interface SpecType extends Identifiable {
    specAttributes: AttributeDefinition[]
}

/*
 * 
 */
export interface SpecElementWithAttributes extends Identifiable {
    values?: AttributeValue[]
}

/**
 * 
 */
interface SpecificationType extends SpecType {

}

/**
 * 
 */
interface SpecObjectType extends SpecType {

}

/**
 * 
 */
interface SpecRelationType extends SpecType {

}

/**
 * Not sure this is really needed? Has no attributes
 */
interface RelationGroupType extends SpecType {

}

/**
 * Represents a hierarchically structured requirements specification
 */
interface Specification extends SpecElementWithAttributes {
    type: SpecificationType
    coreContent: ReqIFContent
    children?: SpecHierarchy[]
}

/**
 * 
 */
interface SpecObject extends SpecElementWithAttributes {
    type: SpecObjectType
}

/**
 * 
 */
interface SpecRelation extends SpecElementWithAttributes {
    type: SpecRelationType
}

/**
 * 
 */
interface RelationGroup extends SpecElementWithAttributes {
    coreContent: ReqIFContent
    specRelations: SpecRelation[]
    type: RelationGroupType
    sourceSpecification: Specification
    targetSpecification: Specification
}