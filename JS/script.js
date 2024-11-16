function openPasswordPrompt(challengeNumber) {
  const password = prompt("Enter the password to access Challenge " + challengeNumber);
  const correctPasswords = {
      2: "TatAli",
      3: "Qd8+Re8#"
  };

  if (password === correctPasswords[challengeNumber]) {
      window.location.href = "challenge" + challengeNumber + ".html";
  } else {
      alert("Incorrect password. Try again!");
  }
}