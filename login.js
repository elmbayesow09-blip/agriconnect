const eye = document.getElementById("eye");
const password = document.getElementById("password");

eye.onclick = () => {
password.type = password.type === "password" ? "text" : "password";
};

document.getElementById("loginForm").addEventListener("submit", e=>{
e.preventDefault();

const email = document.getElementById("email").value;
const pass = document.getElementById("password").value;

const btn = document.getElementById("btn");
const loader = document.getElementById("loader");
const error = document.getElementById("error");

loader.style.display="block";
error.style.display="none";

//  AUTH FIREBASE
auth.signInWithEmailAndPassword(email, pass)

.then(()=>{
window.location.href = "admin.html";
})

.catch(err=>{
loader.style.display="none";
error.style.display="block";

if(err.code === "auth/user-not-found"){
error.innerText = "Utilisateur introuvable";
}
else if(err.code === "auth/wrong-password"){
error.innerText = "Mot de passe incorrect";
}
else{
error.innerText = "Erreur : " + err.message;
}
});

});
