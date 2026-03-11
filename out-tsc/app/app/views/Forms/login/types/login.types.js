/**
 * Type definitions for the login view
 * Follows Interface Segregation Principle (ISP)
 */
/**
 * OAuth provider types
 */
export var OAuthProvider;
(function (OAuthProvider) {
    OAuthProvider["GOOGLE"] = "GOOGLE";
    OAuthProvider["FACEBOOK"] = "FACEBOOK";
})(OAuthProvider || (OAuthProvider = {}));
