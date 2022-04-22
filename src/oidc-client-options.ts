
export class OidcOptions {
    issuer?: string;
    client_id?: string;
    client_secret?: string;
    scope?: string;
    tokenType?: string;
    rejectUnauthorized?: boolean;
}

export default class OidcClientOptions {
    /**
     * The OIDC providers url
     */
    public issuer: string = "";

    /**
     * An ID which identifies the OIDC client
     * at the OIDC privder
     */
    public client_id: string = "";

    /**
     * The secret of the client
     */
    public client_secret: string = "";

    /**
     * Openid returns only sub claim,
     * profile adds additional informations
     * about the user to the JWT.
     */
    public scope: string = "openid profile";

    /**
     * ID for ID tokens.
     */
    public tokenType: string = "ID";

    /**
     * Accept or reject self signed/expired certs
     */
     public rejectUnauthorized: boolean = false;

    /**
     * The constructor fills the attributes of the new instance
     * if correct options are provided.
     * @param {OidcOptions} params
     */
    constructor(params?: OidcOptions) {
        if (params !== null && params !== undefined) {
            if (params.issuer !== null && params.issuer !== undefined) {
                this.issuer = String(params.issuer);
            }
            if (params.client_id !== null && params.client_id !== undefined) {
                this.client_id = String(params.client_id);
            }
            if (params.client_secret !== null && params.client_secret !== undefined) {
                this.client_secret = String(params.client_secret);
            }
            if (params.scope !== null && params.scope !== undefined) {
                this.scope = String(params.scope);
            }
            if (params.tokenType !== null && params.tokenType !== undefined) {
                this.tokenType = String(params.tokenType);
            }
            if (params.rejectUnauthorized !== null &&
                params.rejectUnauthorized !== undefined) {
                this.rejectUnauthorized = Boolean(params.rejectUnauthorized);
            }
        }
    }
}