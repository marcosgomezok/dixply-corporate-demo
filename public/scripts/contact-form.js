const form = document.querySelector("[data-contact-form]");

if (form) {
  const inputs = Array.from(form.querySelectorAll("input, select, textarea"));
  const status = form.querySelector(".form-status");
  const statusTitle = form.querySelector(".form-status-title");
  const statusBody = form.querySelector(".form-status-body");
  const draftLink = form.querySelector(".form-draft-link");
  const message = form.querySelector("#contact-message");
  const counter = form.querySelector("#message-count");

  const localized = (key) => form.dataset[key] ?? "";
  const setError = (input) => {
    const error = form.querySelector(`#error-${input.name}`);
    if (!error) return false;
    let text = "";

    if (!input.value.trim()) text = localized("errorRequired");
    else if (input.name === "email" && !input.validity.valid) text = localized("errorEmail");
    else if (input.name === "message" && input.value.trim().length < 20) text = localized("errorMessageShort");
    else if (input.name === "message" && input.value.length > 2000) text = localized("errorMessageLong");

    error.textContent = text;
    input.setAttribute("aria-invalid", String(Boolean(text)));
    return Boolean(text);
  };

  inputs.forEach((input) => {
    input.addEventListener("blur", () => setError(input));
    input.addEventListener("input", () => {
      if (input.getAttribute("aria-invalid") === "true") setError(input);
    });
  });

  message?.addEventListener("input", () => {
    if (counter) counter.textContent = `${message.value.length.toLocaleString(form.dataset.lang)} / 2,000`;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const invalid = inputs.filter(setError);

    if (invalid.length > 0) {
      if (status) {
        status.hidden = false;
        status.dataset.state = "error";
      }
      if (statusTitle) statusTitle.textContent = localized("errorTitle");
      if (statusBody) statusBody.textContent = "";
      invalid[0]?.focus();
      return;
    }

    const values = new FormData(form);
    const email = String(values.get("email") ?? "");
    const subject = `${localized("brand")} ${form.dataset.lang === "es" ? "consulta" : "inquiry"} — ${String(values.get("company") ?? "")}`;
    const body = [
      `${localized("nameLabel")}: ${String(values.get("name") ?? "")}`,
      `${localized("emailLabel")}: ${email}`,
      `${localized("companyLabel")}: ${String(values.get("company") ?? "")}`,
      `${localized("serviceLabel")}: ${String(values.get("service") ?? "")}`,
      "",
      `${localized("messageLabel")}:`,
      String(values.get("message") ?? ""),
    ].join("\n");

    if (status) {
      status.hidden = false;
      status.dataset.state = "success";
    }
    if (statusTitle) statusTitle.textContent = localized("successTitle");
    if (statusBody) statusBody.textContent = localized("successBody");
    if (draftLink) {
      draftLink.href = `mailto:hello@vaqzeryn.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      draftLink.textContent = localized("draftLink");
      draftLink.hidden = false;
    }
    status?.focus();
  });
}
