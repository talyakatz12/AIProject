	import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

	// createChat({
	// 	webhookUrl: 'http://localhost:5678/webhook/fab86340-10db-42d8-b117-d08ff2e773c6/chat'
	// });

    createChat({
	webhookUrl: 'http://localhost:5678/webhook/fab86340-10db-42d8-b117-d08ff2e773c6/chat',
	webhookConfig: {
		method: 'POST',
		headers: {}
	},
	target: '#n8n-chat',
	mode: 'window',
	chatInputKey: 'chatInput',
	chatSessionKey: 'sessionId',
	loadPreviousSession: true,
	metadata: {},
	showWelcomeScreen: false,
	defaultLanguage: 'en',
	initialMessages: [
		// 'Hi there! 👋',
		'My name is Chat and I am going to help you today!!'
	],
	i18n: {
		en: {
			title: 'Clayla site🎨',
			subtitle: "Start a chat 24/7.",
			footer: '',
			getStarted: 'Ask what you what to know about Clayla in TLV',
			inputPlaceholder: 'Type your question..',
		},
	},
	enableStreaming: false,
});
