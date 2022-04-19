export interface JwkParams {
    kid?: string;
    kty?: string;
    alg?: string;
    use?: string;
    n?: string;
    e?: string;
    x5c?: string[];
    x5t?: string;
    x5tS256?: string;
}
export default class Jwk {
    public kid: string = "";
    public kty: string = "";
    public alg: string = "";
    public use: string = "";
    public n: string = "";
    public e: string = "";
    public x5c: string[] = [];
    public x5t: string = "";
    public x5tS256: string = "";

    /**
    * The constructor fills the attributes of the new instance
    * if correct options are provided.
    * @param {JwkParams} params
    */
    constructor(params: any = null) {
        if (params !== null && params !== undefined) {
            if (params.kid) {
                this.kid = String(params.kid);
            }
            if (params.kty) {
                this.kty = String(params.kty);
            }
            if (params.alg) {
                this.alg = String(params.alg);
            }
            if (params.use) {
                this.use = String(params.use);
            }
            if (params.n) {
                this.n = String(params.n);
            }
            if (params.e) {
                this.e = String(params.e);
            }
            if (params.x5c) {
                this.x5c = params.x5c.map((p: string) => String(p));
            }
            if (params.x5t) {
                this.x5t = String(params.x5t);
            }
            if (params.x5tS256) {
                this.x5tS256 = String(params.x5tS256);
            }
            if (params["x5t#S256"]) {
                this.x5tS256 = String(params["x5t#S256"]);
            }
        }
    }
}