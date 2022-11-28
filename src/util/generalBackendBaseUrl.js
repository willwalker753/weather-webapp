let generalBackendBaseUrl = 'http://personal:8000/';

if (process.env.GITHUB_PAGES) {
    generalBackendBaseUrl = 'https://general-backend.cyclic.app/';
}

export default generalBackendBaseUrl;