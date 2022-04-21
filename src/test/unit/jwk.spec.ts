import chai from "chai";
import Jwk, { JwkParams } from "../../jwk.model";
const expect = chai.expect;

describe("JwkKey..", () => {
    it("constructor should fill attributes correctly", () => {
        const params: JwkParams = {
            kid: "a",
            kty: "b",
            alg: "c",
            use: "d",
            n: "e",
            e: "f",
            x5c: ["g", "h", "i"],
            x5t: "j",
            x5tS256: "k",
        };
        const res = new Jwk(params);
        expect(res.kid)
            .not.to.eq(null);
        expect(res.kid).to.eq(params.kid)
            .to.have.lengthOf.greaterThan(0);
        expect(res.kty)
            .not.to.eq(null);
        expect(res.kty).to.eq(params.kty)
            .to.have.lengthOf.greaterThan(0);
        expect(res.alg)
            .not.to.eq(null);
        expect(res.alg).to.eq(params.alg)
            .to.have.lengthOf.greaterThan(0);
        expect(res.use)
            .not.to.eq(null);
        expect(res.use).to.eq(params.use)
            .to.have.lengthOf.greaterThan(0);
        expect(res.n)
            .not.to.eq(null);
        expect(res.n).to.eq(params.n)
            .to.have.lengthOf.greaterThan(0);
        expect(res.e)
            .not.to.eq(null);
        expect(res.e).to.eq(params.e)
            .to.have.lengthOf.greaterThan(0);
        expect(res.x5c)
            .not.to.eq(null);
        expect(res.x5t).to.eq(params.x5t)
            .to.have.lengthOf.greaterThan(0);
        expect(res.x5t).to.deep.eq(params.x5t)
            .to.have.lengthOf.greaterThan(0);
        expect(res.x5tS256).to.deep.eq(params.x5tS256)
            .to.have.lengthOf.greaterThan(0);
        expect(Object.keys(res)).to.have.lengthOf(
            Object.keys(params).length
        ).to.be.greaterThan(0);
    });
});
