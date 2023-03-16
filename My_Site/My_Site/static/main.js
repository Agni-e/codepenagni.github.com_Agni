$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Looking for a Developer?"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Human,", "Web Developer,", "Designer,", "Freelancer,"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const generateQuote = function() {
    const quotes = [
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "-Albus Dumbledore"
    },
    {
        quote: "தாளம் இங்கு தப்பவில்லை, " + "யார் மீதும் தப்பு இல்லை " + " கால்கள் போன பாதை எந்தன் எல்லை..." + " Translation: No beat has'en missed, No body is to be blamed, - The limit of my journy is to where my feet takes me to.",
        author: '-"Salangai Oli"-Vaira Muthu'
    },
    {
        quote: "அன்பறிவு தேற்றம் அவாவின்மை இந்நான்கும் - நன்குடையான் கட்டே தெளிவு." + " Translation: A loyal love with wisdom, clearness, mind from avarice free; Who hath these four good gifts should ever trusted be.",
        author: "-குறள் 513"
    },
    {
        quote: "After all, I am just the same as you." + " I put faith in my own convictions as to what I believe is right, and consider them to be righteous.",
        author: '-"Death Note"-Near'
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "-Arthur Weasley"
    },
    {
        quote: "Ammu said that human beings were creatures of habit, and it was amazing the kind of things one could get used to.",
        author: '-"God of Samll Things"-Arundathi Roy'
    },
    {
        quote: "Confusion is a luxury which only the very, very young can possibly afford and you are not that young anymore",
        author: ' -"Giovanni/s Room" - James Baldwin'
    },
    {
        quote: " To define is to limit. ",
        author: ' -"The picture of Dorian Gray"- Oscar Wilde'
    },
    {
        quote: "Saani mela kaal vacha dirty aagum shoe Oththae…",
        author: '-"Kaasumela Kaasuvandhu Song -Karthik Raja ( Kaathala Kaathala )'
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}

});