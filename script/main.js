/*document.querySelectorAll(".carousel").forEach(carousel =>{
    const items =carousel.querySelectorAll(".carousel-item");
    const btnHtml = Array.from(items, () =>{
        return `<span class="carousel-btn"></span>`;
    })
    carousel.insertAdjacentHTML("beforeend",`
    <div class="carousel-nav">
     ${btnHtml.join("")}
    </div>
    `);
const buttons =carousel.querySelectorAll(".carousel-button");
  buttons.forEach((button,i) =>{
   buttons.addEventListener ("click",() =>{
    //un-select all the items
    items.forEach(item => item.classList.remove("carousel-item-selected"));
    buttons.forEach(button => button.classList.remove("carousel-btn-selected"));

    items[i].classList.add("carousel-item-selected");
    button.classList.add("carousel-btn-selected");
   });
  });
  //select the first item on page load
  items[0].classList.add("carousel-item-selected");
  buttons[0].classList.add("carousel-btn-selected");
});