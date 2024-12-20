export function initPaymentModal() {
    const donateButtons = document.querySelectorAll('.donate-now');
    const modal = document.querySelector('.payment-modal');
    const closeBtn = modal.querySelector('.close-modal');
    const paymentOptions = modal.querySelectorAll('.payment-option');
    const paymentForms = modal.querySelectorAll('.payment-form');

    function showModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function hideModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function switchPaymentMethod(selectedOption) {
        paymentOptions.forEach(option => option.classList.remove('active'));
        paymentForms.forEach(form => form.classList.remove('active'));
        
        selectedOption.classList.add('active');
        const targetForm = modal.querySelector(`#${selectedOption.dataset.target}`);
        targetForm.classList.add('active');
    }

    donateButtons.forEach(button => {
        button.addEventListener('click', showModal);
    });

    closeBtn.addEventListener('click', hideModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });

    paymentOptions.forEach(option => {
        option.addEventListener('click', () => switchPaymentMethod(option));
    });

    // Card number formatting
    const cardInput = modal.querySelector('#card-number');
    if (cardInput) {
        cardInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(.{4})/g, '$1 ').trim();
            e.target.value = value;
        });
    }
}