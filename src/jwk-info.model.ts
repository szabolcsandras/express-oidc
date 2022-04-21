export interface IJwkInfoParams {
    jwks_uri?: string;
}
export default class JwkInfo {
    /**
     * Currently we only need jwksuri, it
     * shows where the keys are available to
     * validate tokens.
     */
    public jwksUri: string = "";

    /**
     * The constructor fills the attributes of the new instance
     * if correct options are provided.
     * @param {IJwkInfoParams} params
     */
    constructor(params?: IJwkInfoParams) {
        if (params !== null && params !== undefined) {
            if (params.jwks_uri !== null && params.jwks_uri !== undefined) {
                this.jwksUri = String(params.jwks_uri);
            }
        }
    }
}