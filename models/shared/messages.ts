
export class APIError extends Error {
    constructor(
        name: string,
        message: string,
        public status: number,
        public properties?: any,
        public internalProperties?: any
    ) {
        super();
        this.name = name;
        this.message = message;
    }

    /**
     * Convert APIError object to a PublicError object.
     */
    publicError() {
        return new PublicError(this)
    }

}

export class PublicError {
    name: string
    message: string
    status: number
    properties?: any

    constructor(err: APIError) {
        this.name = err.name;
        this.message = err.message;
        this.status = err.status;
        this.properties = err.properties;
    }
}

export class PublicInfo {
    constructor(
        public message: string,
        public status: number,
        public properties?: any) {
            
        }
}