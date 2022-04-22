import chai from "chai";
import OidcClientOptions, { OidcOptions } from "../../oidc-client-options";
const expect = chai.expect;

describe("OidcClientOptions...", () => {
    it("constructor should fill attributes correctly", () => {
        const params: OidcOptions = {
            issuer: "a",
            client_id: "b",
            client_secret: "c",
            scope: "d",
            tokenType: "e",
            rejectUnauthorized: true,
        };
        const res = new OidcClientOptions(params);
        expect(res.issuer)
            .not.to.eq(null);
        expect(res.issuer).to.eq(params.issuer)
            .to.have.lengthOf.greaterThan(0);
        expect(res.client_id)
            .not.to.eq(null);
        expect(res.client_id).to.eq(params.client_id)
            .to.have.lengthOf.greaterThan(0);
        expect(res.client_secret)
            .not.to.eq(null);
        expect(res.client_secret).to.eq(params.client_secret)
            .to.have.lengthOf.greaterThan(0);
        expect(res.scope)
            .not.to.eq(null);
        expect(res.scope).to.eq(params.scope)
            .to.have.lengthOf.greaterThan(0);
        expect(res.tokenType)
            .not.to.eq(null);
        expect(res.tokenType).to.eq(params.tokenType)
            .to.have.lengthOf.greaterThan(0);
        expect(res.rejectUnauthorized)
            .not.to.eq(null);
        expect(res.rejectUnauthorized)
            .to.eq(params.rejectUnauthorized);
        expect(Object.keys(res)).to.have.lengthOf(
            Object.keys(params).length
        ).to.be.greaterThan(0);
    });
});
