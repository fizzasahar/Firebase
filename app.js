import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut } from "./firebase.js"


// password eye icon
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', () => {
  const type = password
    .getAttribute('type') === 'password' ?
    'text' : 'password';``
  password.setAttribute('type', type);
  togglePassword.classList.toggle('bi-eye');

});


// signup
let signUp = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let cPassword = document.getElementById("confirm_pass").value;
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let userData = { name, number, email, password };
  console.log(userData);

  if (emailRegex.test(email) && passwordRegex.test(password)) {
    console.log("test");
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Account created successfully");
        window.location.href = "./signup and Login with Backend/index.html"
        // ________________________________Add Doc
        try {
          const docRef = await addDoc(collection(db, "users"), {
            ...userData,
            uId: user.uid,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        // ____________________________________Set Doc
        try {
          await setDoc(doc(db, "users", user.uid), {
            ...userData,
            uId: user.uid,
          });
          console.log("Document written with ID: ", user.uid);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.code);
      });
  } else {
    alert("Invalid email or Password");
  }
  if (password !== cPassword) {
    alert("Passwords should be identical");
  }
};
if (window.location.pathname == "./signup and Login with Backend/index.html") {
  let signUp_btn = document.getElementById("signUp_btn");
  signUp_btn.addEventListener("click", signUp);
}

// login
let logIn = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login Successful");
      window.location.href = "./signup and Login with Backend/index.html";
    })
    .catch((error) => {
      alert(error.code);
    });
};
if (window.location.pathname == "./signup and Login with Backend/index.html") {
  let login_btn = document.getElementById("login_btn");
  login_btn.addEventListener("click", logIn);
}




// sentmail
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    window.location.href = "./Website/dashboard.html"
  } else {
    console.log("User not found")
  }
});
let sendMail = () => {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log("Email verification sent!");
    });
}
let verification = document.getElementById("verification")
verification.addEventListener("click", sendMail)


// logout

let signout = () => {
  signOut(auth).then(() => {
    console.log("Sign-out successful.");
    window.location.href = "../login.html"
  }).catch((error) => {
    console.log(error)
  });
}
let sign_out = document.getElementById("sign_out")
sign_out.addEventListener("click", signout)







