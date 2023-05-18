const quotes = [{
    quote: `“Success is most often achieved by those who don't know that failure is inevitable.”`,
    writer: `—Aagam frm Mumbai`
}, {
    quote: `“Things work out best for those who make the best of how things work.”`,
    writer: `—Vatsal Bhai`
}, {
    quote: `“Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.”`,
    writer: `—Gracy Karnawat`
}, {
    quote: `“Sometimes you can't see yourself clearly until you see yourself through the eyes of others.”`,
    writer: `—Kashmiri Pandit`
}, {
    quote: `“All our dreams can come true if we have the courage to pursue them.”`,
    writer: `—Diya Nair`
}, {
    quote: `“Don't cry because it's over, smile because it happened.”`,
    writer: `—Shiv Gadway`
}, {
    quote: `“The best and most beautiful things in the world cannot be seen or touched—they must be felt with the heart.”`,
    writer: `—Astha Singh`
}, {
    quote: `“Great minds discuss ideas; average minds discuss events; small minds discuss people.”`,
    writer: `—Aparna Purohit`
}, {
    quote: `“As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.”`,
    writer: `—Sheeladitya Mohanty`
}, {
    quote: `“Only put off until tomorrow what you are willing to die having left undone.”`,
    writer: `—Sonakshi Tiwari`
}, {
    quote: `“Many of life's failures are people who did not realize how close they were to success when they gave up.”`,
    writer: `—Purti Rajput`
}, {
    quote: `“Kuch to log kahenge logo ka kaam hai kehna...”`,
    writer: `—Sanjay Dutt`
}
] 

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click",function  () {
    let random = Math.floor(Math.random()* quotes.length);
    
    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;

})