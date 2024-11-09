function showNextSection(nextSectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));

    // Show the next section
    const nextSection = document.getElementById(nextSectionId);
    nextSection.classList.remove('hidden');
    nextSection.classList.add('fade-in');
    
    // Scroll smoothly to the new section
    nextSection.scrollIntoView({ behavior: 'smooth' });
}

function submitForm(event) {
    event.preventDefault(); // Prevent form from reloading page

    // Hide form and show final apology section
    const contactSection = document.getElementById('contact');
    contactSection.classList.add('hidden');

    const finalApologySection = document.getElementById('final-apology');
    finalApologySection.classList.remove('hidden');
    finalApologySection.classList.add('fade-in');

    // Show sad animation and play song after the form is submitted
    showSadAnimation();
}

function showSadAnimation() {
    const sadAnimation = document.getElementById('sad-animation');
    sadAnimation.classList.remove('hidden');
}

function playSadSong() {
    const song = document.getElementById('song');
    song.play();
}

// Initialize EmailJS (replace YOUR_USER_ID with your actual User ID)
(function () {
    emailjs.init("UXsVNt14OGggyP2L9");
})();

function sendMessage() {
    const message = document.getElementById('messageInput').value;

    if (!message.trim()) {
        alert("Please write a message before sending.");
        return;
    }

    // Send email using EmailJS
    emailjs.send("service_mkumo2c", "template_jfkfq1o", {
        message: message,
    })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('statusMessage').innerText = "Message sent successfully!";
        document.getElementById('messageInput').value = ""; // Clear the textarea
    }, (error) => {
        console.error('FAILED...', error);
        document.getElementById('statusMessage').innerText = "Failed to send message. Please try again.";
    });
}

