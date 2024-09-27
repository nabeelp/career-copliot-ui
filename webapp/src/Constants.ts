// CUSTOM: If changing images,be sure to change this image as well
import botIconCareerPlan from './assets/bot-icons/bot-icon-careerplan.png';

export const Constants = {
    app: {
        name: 'CareerCopilot',
        updateCheckIntervalSeconds: 60 * 5,
        CONNECTION_ALERT_ID: 'connection-alert',
        importTypes: '.txt,.pdf,.docx,.md,.jpg,.jpeg,.png,.tif,.tiff,.bmp,.gif',
    },
    msal: {
        method: 'redirect', // 'redirect' | 'popup'
        cache: {
            cacheLocation: 'localStorage',
            storeAuthStateInCookie: false,
        },
        semanticKernelScopes: ['openid', 'offline_access', 'profile'],
        // MS Graph scopes required for loading user information
        msGraphAppScopes: ['User.ReadBasic.All'],
    },
    bot: {
        profile: {
            id: 'bot',
            fullName: 'Career Copilot',
            emailAddress: '',
            photo: botIconCareerPlan,
        },
        fileExtension: 'skcb',
        typingIndicatorTimeoutMs: 5000,
    },
    debug: {
        root: 'sk-chatbot',
    },
    sk: {
        service: {
            defaultDefinition: 'int',
        },
        // Reserved context variable names
        reservedWords: ['server_url', 'server-url'],
        // Flag used to indicate that the variable is unknown in plan preview
        UNKNOWN_VARIABLE_FLAG: '$???',
    },
    adoScopes: ['vso.work'],
    BATCH_REQUEST_LIMIT: 20,
    plugins: {
        // For a list of Microsoft Graph permissions, see https://learn.microsoft.com/en-us/graph/permissions-reference.
        // Your application registration will need to be granted these permissions in Azure Active Directory.
        msGraphScopes: ['Calendars.Read', 'Mail.Read', 'Mail.Send', 'Tasks.ReadWrite', 'User.Read'],
        msGraphOboScopes: ['[INCLUDE THE SCOPE FOR THE WEBAPI APP REGISTRATION HERE]'],
    },
    KEYSTROKE_DEBOUNCE_TIME_MS: 250,
};
