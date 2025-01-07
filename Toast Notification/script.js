const sucess_msg = `<i class="fa-solid fa-check"></i> sucessfully submitted`;
const err_msg = `<i class="fa-solid fa-xmark"></i> error has occured`;
const invld_msg = `<i class="fa-solid fa-exclamation"></i> invalid submission`;

const toast_box = document.querySelector(".toast");

function toastmsg(msg) {
  const toast = document.createElement("div");
  toast.classList.add("js-toast-msg");
  toast_box.appendChild(toast);
  if (msg.includes("error")) {
    toast.classList.add("toast-red");
  } else if (msg.includes("sucess")) {
    toast.classList.add("toast-green");
  } else if (msg.includes("invalid")) {
    toast.classList.add("toast-yellow");
  }
  toast.innerHTML = msg;

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
