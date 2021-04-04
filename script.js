var faq = document.getElementsByClassName('questions');
var buttons = document.getElementsByClassName('button');
var i;

for (i = 0; i < faq.length; i++) {
faq[i].addEventListener("click", function() {
    this.classList.toggle('active');
    var butts = this.firstElementChild;
    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight) {
    panel.style.maxHeight = null;   
    butts.style.transform = "rotate(360deg)"
    this.classList.toggle('visited')
    } else {
    panel.style.maxHeight = panel.scrollHeight + 'px';
    butts.style.transform = 'rotate(180deg)'
    }
});
}