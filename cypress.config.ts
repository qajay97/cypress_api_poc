import { defineConfig } from 'cypress';
export default defineConfig({
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 120000,
    viewportWidth: 1280,
    viewportHeight: 720,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 10,
    chromeWebSecurity: false,
    retries: {
        runMode: 3,
        openMode: 0,
    },
    e2e: {
        baseUrl: 'https://api.booking.com',
        experimentalRunAllSpecs: true,
        watchForFileChanges: false,
        testIsolation: false,
        supportFile: 'cypress/support/commands.ts',
        async setupNodeEvents(on, config) {
        },
    },
});
