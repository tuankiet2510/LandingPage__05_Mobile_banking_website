assignSignto_transectionItemAmount__Value();

export function assignSignto_transectionItemAmount__Value() {
  document.querySelectorAll(".transection-item__amount").forEach((item) => {
    const sign = item.getAttribute("data-sign"); // lấy giá trị data-sign
    const valueSpan = item.querySelector(".value");
    if (valueSpan) {
      let text = valueSpan.textContent.trim();
      // loại bỏ dấu cũ nếu có
      text = text.replace(/^[-+]\s*/, "");
      // gán dấu mới
      if (sign === "negative") {
        valueSpan.textContent = `- ${text}`;
      } else if (sign === "positive") {
        valueSpan.textContent = `+ ${text}`;
      }
    }
  });
}
