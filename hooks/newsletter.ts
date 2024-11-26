'use server'

export async function handleSubscribe(formData: FormData) {
	// Handle newsletter subscription
	const email = formData.get('email')
	console.log('Subscribed to newsletter', email)
}
