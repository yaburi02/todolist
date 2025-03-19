const addBtn = document.querySelector(".fa-plus");
const input = document.querySelector(".footer_input");
const items = document.querySelector(".items");
const noteInput = document.querySelector(".note_input");

// li 요소 생성 함수
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.className = "item";
  itemRow.innerHTML = `
        <span>${text}</span>
        <i class="fa-solid fa-check"></i>
        <i class="fa-solid fa-circle-half-stroke"></i>
        <i class="fa-solid fa-trash-can"></i>
    `;

  // 체크 버튼 클릭
  itemRow.querySelector(".fa-check").addEventListener("click", () => {
    itemRow.classList.toggle("item_done");
  });

  // 절반 완성 버튼
  itemRow
    .querySelector(".fa-circle-half-stroke")
    .addEventListener("click", () => {
      itemRow.classList.toggle("item_half_done");
    });

  // 삭제 버튼
  itemRow
    .querySelector(".fa-trash-can")
    .addEventListener("click", () => itemRow.remove());

  requestAnimationFrame(() => itemRow.scrollIntoView({ block: "center" }));

  return itemRow;
}


function onAdd() {
  const text = input.value.trim();
  if (!text) {
    input.value = "";
    input.focus();
    return;
  }

  items.appendChild(createItem(text));
  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", onAdd);
input.addEventListener("keyup", (e) => e.key === "Enter" && onAdd());
