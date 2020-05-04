class RequestException extends Error {
    constructor(errorCode, message) {
        super(message)
        this.errorCode = errorCode;
    }
}

module.exports = RequestException;