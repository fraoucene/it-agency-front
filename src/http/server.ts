let server = 'SERVER_IS_NOT_CONFIGURED';
export const username = 'fguezout';
export const password = 'root';
if (process.env.SERVER === 'production') {
    server = '/info-tech-agency-back';
} else if (process.env.SERVER === 'development') {
    server = '/info-tech-agency-back';
} else if (process.env.SERVER === 'local') {
    server = 'http://localhost:8880';
}

export const SERVER = server;
