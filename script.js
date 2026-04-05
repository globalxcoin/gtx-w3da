// Handle trade form submission
const tradeForm = document.getElementById('tradeForm');
const tradeMessage = document.getElementById('tradeMessage');

tradeForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(tradeForm);

    // Create an object with form data
    const tradeData = {
        type: formData.get('tradeType'),
        asset: formData.get('asset'),
        amount: formData.get('amount'),
        wallet: formData.get('wallet'),
        whatsapp: formData.get('whatsapp')
        // You can handle file upload separately
    };

    console.log('Trade submitted:', tradeData);

    // TODO: Send tradeData to backend API or WhatsApp integration
    // Example using fetch to your backend:
    /*
    try {
        const res = await fetch('/api/trade', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tradeData)
        });
        const result = await res.json();
        tradeMessage.textContent = result.message || 'Trade submitted successfully!';
    } catch (err) {
        tradeMessage.style.color = 'red';
        tradeMessage.textContent = 'Error submitting trade. Please try again.';
        console.error(err);
    }
    */

    // For now, show confirmation
    tradeMessage.textContent = "Your trade request has been submitted. Admin will contact you shortly.";
    tradeForm.reset();
});
