document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function(e){
      e.preventDefault(); 
      const card = this.closest('.card');
      const phoneName = card.querySelector('h4').innerText;
      const phonePrice = card.querySelector('.price').innerText;
      if(confirm(`📱 ${phoneName}\n💰 দাম: ${phonePrice}\n\nOrder করতে চান?`)){
        window.location.href = "login.html";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(e){
    e.preventDefault(); // Page reload বন্ধ

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const remember = document.querySelector('input[type="checkbox"]').checked;

    if(email === "" || password === ""){
      alert("Please fill all fields!");
      return;
    }

    // Demo Login Success
    alert(`Login Successful!\nEmail: ${email}\nRemember Me: ${remember ? 'Yes' : 'No'}`);
    
    // Login এর পর Home Page এ পাঠাবে
    window.location.href = "index.html";
  });

});
document.addEventListener("DOMContentLoaded", function() {

  const form = document.querySelector('form');

  form.addEventListener('submit', function(e){
    e.preventDefault(); // Page reload বন্ধ

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;

    // Validation
    if(name === "" || email === "" || password === "" || confirmPassword === ""){
      alert("সব ঘর পূরণ করুন!");
      return;
    }

    if(password!== confirmPassword){
      alert("Password আর Confirm Password মিলছে না!");
      return;
    }

    if(password.length < 8){
      alert("Password কমপক্ষে 6 অক্ষরের হতে হবে!");
      return;
    }

    // Demo Register Success
    alert(`Registration Successful!\nName: ${name}\nEmail: ${email}`);

    // Register এর পর Login Page এ পাঠাবে
    window.location.href = "login.html";
  });

});