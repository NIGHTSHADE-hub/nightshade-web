/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_HF_API_KEY: string;
	readonly VITE_GEMINI_API_KEY: string;
	readonly VITE_EMAILJS_SERVICE_ID: string;
	readonly VITE_EMAILJS_USER_TEMPLATE_ID: string;
	readonly VITE_EMAILJS_ADMIN_TEMPLATE_ID: string;
	readonly VITE_EMAILJS_PUBLIC_KEY: string;
	readonly VITE_COMMUNITY_LINK: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
