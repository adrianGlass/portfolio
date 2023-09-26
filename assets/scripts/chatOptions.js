console.log('loaded')

if (window.HubSpotConversations) {
    console.log('The api is ready already');
    
    window.hsConversationsSettings = {
        loadImmediately: false,
        disableAttachment: true
    };
}