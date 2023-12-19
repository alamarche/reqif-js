import { DefaultXMLNode } from "./xmlnode"

import {describe, it, expect} from 'vitest'

describe("XML Node", () => {
    it("Simple XML export example", () => {
        let x = new DefaultXMLNode(
            "test", 
            new Map([["Test", "1"]]), 
            "testContents"
        )

        expect(x.toXML()).toBe("<test Test=\"1\">testContents</test>")
    })

    it("Nested contents", () => {
        let inner = new DefaultXMLNode(
            "inner",
            new Map([
                ["innerProp1", "1"],
                ["innerProp2", "2"]
            ]),
            "innerContents"
        )

        let outer = new DefaultXMLNode(
            "outer",
            undefined,
            [inner]
        )
        
        expect(outer.toXML()).toBe("<outer><inner innerProp1=\"1\" innerProp2=\"2\">innerContents</inner></outer>")
    })
})