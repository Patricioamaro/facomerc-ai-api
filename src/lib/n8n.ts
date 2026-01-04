export const n8n = {
    /**
     * Sends data to an n8n webhook (POST)
     * @param webhookPath The path part of your production webhook URL (e.g., 'youtube-viral-clipper')
     * @param body The JSON payload to send
     */
    async trigger(webhookPath: string, body: any) {
        // In production, this should be an env variable like NEXT_PUBLIC_N8N_WEBHOOK_URL
        // For now we assume a standard local or tunnel URL, but we'll use a relative path proxy or direct URL
        // TODO: User needs to set this URL
        const baseUrl = process.env.NEXT_PUBLIC_N8N_HOST || 'https://n8n.facomercai.com/webhook';

        try {
            const response = await fetch(`${baseUrl}/${webhookPath}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(`n8n webhook failed: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Failed to trigger n8n workflow:', error);
            throw error;
        }
    }
};
