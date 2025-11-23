// Simple contact form behaviour: opens WhatsApp with message if user submits.
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    var name = this.name.value || '';
    var contact = this.contact.value || '';
    var title = this.title.value || '';
    var message = this.message.value || '';
    var text = 'Hello, I am ' + encodeURIComponent(name) + '.%0AContact: ' + encodeURIComponent(contact) + '%0AProject: ' + encodeURIComponent(title) + '%0A%0A' + encodeURIComponent(message);
    // Open WhatsApp chat
    var wa = 'https://wa.me/91828521139?text=' + text;
    window.open(wa, '_blank');
    document.getElementById('formStatus').textContent = 'Opening WhatsApp to send your message...';
});