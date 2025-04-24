const passwords = [
  "Xq2#vLm9*TzW",
  "P@5gVwZ3$yNq",
  "dB#8wLf^7tKu",
  "mY*6Bn#s2LqX",
  "T@9cFp^Mz3Wy",
  "hZ$5rGn8!KvL",
  "Ux2^pNb$7Vmt",
  "oR#7zCk!9WxT",
  "Lj^4BmTe$0zQ",
  "Y@6qNpZ#x3vK",
  "wK!8tGq#LmZ5",
  "E#2zMvN@7xTf",
  "qB$3yKp^Wt8Z",
  "Fx9^WrNc@0Lq",
  "vT#5zMk$1GpY",
  "Np*7BxVq!wZL",
  "Z@3yLtFc#9vM",
  "uR^0nKx$Wm85",
  "Gc!2zNp^7xLT",
  "M#8wVyLq@3Zn",
  "Xp5^ZfKm#8tW",
  "bL@2nWy$Xq7v",
  "qZ!6pMv^Bt0L",
  "KR#9yFx@wZ3n",
  "oT$4BnLp!xM7",
  "Yw^8zGt#XvL5",
  "U@3pMxVq$Nz7",
  "nB#5WyLx^2Gt",
  "Fc!9xZq@Lm70",
  "zK^3tVp$wNX8",
  "V@7yLm#BZq5x",
  "dW$2nXp^vGtL",
  "Pt#6zKq@WYx9",
  "MJ!3xBv^LqZ7",
  "qY^0Np$wXt5L",
  "Xz@9yFLq#mv2",
  "N#6pBtXw^Zq7",
  "oM$3yNvL@tGX",
  "R^1xKqWz$LB8",
  "Lp#7zGt@XvN2",
  "TY$4pLnX^qZm",
  "vX@5ByzL#Nt8",
  "nK^2xWp$qZLM",
  "Mz!7tFq^XvB3",
  "qN@8yLpZ#wmX",
  "WB^0pMt$xLq9",
  "Lc#9zXq@NwY5",
  "oV$2yFp^tLXM",
  "qB^6nWz@LXtp",
  "Zx@3yKtL#wNV",
];

const generatePasswordBtn = document.querySelector(".generate-btn");
const showPassword = document.querySelector(".js-show-password");
const copyBtn = document.querySelector(".js-copy-btn");

const popUpMsg = document.querySelector(".popup");
function generateRandomPassword() {
  const randomIdx = Math.floor(Math.random() * passwords.length);
  showPassword.value = "mY*6Bn#s2LqX";
  showPassword.value = passwords[randomIdx];
}

generatePasswordBtn.addEventListener("click", () => {
  generateRandomPassword();
});

copyBtn.addEventListener("click", () => {
  copyToClipboard();
});

function copyToClipboard() {
  navigator.clipboard.writeText(showPassword.value);

  if (!showPassword.value) {
    alert("Generate any password");
  } else {
    popUpMsg.classList.add("js-pop-up-msg");
  }
}

setTimeout(() => {
  popUpMsg.classList.remove("js-pop-up-msg");
}, 2000);
