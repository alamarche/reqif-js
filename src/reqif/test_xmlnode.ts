import { DefaultXMLNode } from "./xmlnode";

describe("Default XML node", () => {
    it("No properties, primitive contents", () => {
        let x = new DefaultXMLNode("derp", undefined, "test")
        expect(x.toXML()).toBe("<derp>test</derp>")
    })
})