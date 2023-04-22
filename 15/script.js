const buttons = document.querySelectorAll("button")

const callback = (button, index) => {
  let plan = ""
  switch (index) {
    case 0:
      plan = "Essentilas"
      break

    case 1:
      plan = "Ultimate"
      break

    case 2:
      plan = "Enterprise"
      break

    default:
      plan = "no found"
      break
  }

  button.addEventListener("click", () => {
    document.querySelector("#alert").innerHTML += `
          <div class="alert">
            <i class="ph ph-info"></i>
            <div> Inscreva-se para acessar o plano <strong>${plan}</strong></div>
          </div>
          `
  })
}
buttons.forEach(callback)