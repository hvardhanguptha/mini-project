const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const faqItems = document.querySelectorAll('.faq-item');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim().toLowerCase();
    faqItems.forEach((faqItem) => {
        const questionText = faqItem.querySelector('.faq-question').textContent.trim().toLowerCase();
        if (questionText.includes(searchTerm)) {
            faqItem.style.display = 'block';
        } else {
            faqItem.style.display = 'none';
        }
    });
});