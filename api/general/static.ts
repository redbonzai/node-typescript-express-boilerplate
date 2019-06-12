export function getStaticHome(env: string) {
    switch (env) {
        case 'development':
            return 'http://localhost:4200/static/'
        case 'production':
            // cdn
            break;
    }
}

export function fileMapper(env: string): (filename: string) => string{
    return (filename) => getStaticHome(env) + filename;
}