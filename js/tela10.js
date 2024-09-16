const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

function copiarCupom() {
    const cupom = "ENEM15";
    navigator.clipboard.writeText(cupom).then(() => {
        alert("Cupom copiado: " + cupom);
    });
}