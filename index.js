var w = window.innerWidth;
var h = window.innerHeight;
// console.log(w,h);
let hsecondul  = document.getElementById("hsecondul");
hsecondul.style.right = w/15 + "px";
document.getElementById("hfirstul").style.marginLeft = w/40 + "px";
// (document.querySelectorAll(".haclass").[0].style.padding = "5px");



document.getElementById("subbox1-li1").addEventListener("mouseover",function () {
    document.getElementById("mail-icon").style.transform = "scale(1.5)";
})
document.getElementById("subbox1-li1").addEventListener("mouseleave",function () {
    document.getElementById("mail-icon").style.transform = "scale(1)";
})
document.getElementById("subbox1-li2").addEventListener("mouseover",function () {
    document.getElementById("call-icon").style.transform = "scale(1.5)";
})
document.getElementById("subbox1-li2").addEventListener("mouseleave",function () {
    document.getElementById("call-icon").style.transform = "scale(1)";
})


const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentTestimonialIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

function prevTestimonial() {
    currentTestimonialIndex--;
    if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    }
    showTestimonial(currentTestimonialIndex);
}

function nextTestimonial() {
    currentTestimonialIndex++;
    if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = 0;
    }
    showTestimonial(currentTestimonialIndex);
}

showTestimonial(currentTestimonialIndex);
prevButton.addEventListener('click', prevTestimonial);
nextButton.addEventListener('click', nextTestimonial);






function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Create a Blob containing the data and set the MIME type to text/plain
    const blob = new Blob([data], { type: 'text/plain' });

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a temporary link element and set its attributes
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact_info.txt';
    
    // Simulate a click on the link to trigger the download
    a.click();

    // Clean up by revoking the URL object
    window.URL.revokeObjectURL(url);
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";

}


