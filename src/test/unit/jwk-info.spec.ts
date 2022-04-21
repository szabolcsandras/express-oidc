import chai from "chai";
import JwkInfo, { IJwkInfoParams } from "../../jwk-info.model";
const expect = chai.expect;

describe("JwkInfo...", () => {
    it("constructor should fill attributes correctly", () => {
        const params: IJwkInfoParams = {
            jwks_uri: "a",
        };
        const res = new JwkInfo(params);
        expect(res.jwksUri)
            .not.to.eq(null);
        expect(res.jwksUri).to.eq(params.jwks_uri)
            .to.have.lengthOf.greaterThan(0);
        expect(Object.keys(res)).to.have.lengthOf(
            Object.keys(params).length
        ).to.be.greaterThan(0);
    });
});
