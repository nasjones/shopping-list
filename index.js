$(function () {
    $("#js-shopping-list-form").submit(e => {
      e.preventDefault();
      const itemStyle = [];
      const item = $(e.currentTarget).find('input[name="shopping-list-entry"]').val();
  
      itemStyle.push($(`<li>
          <span class="shopping-item">${item}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`));
  
      $(".shopping-list").append(itemStyle);
    });
  
    $(".shopping-list").on('click','.shopping-item-toggle', e => {
  
      $(e.currentTarget).parent().siblings(".shopping-item").toggleClass("shopping-item__checked");
    });
  
    $(".shopping-list").on('click','.shopping-item-delete' ,e => {
      $(e.currentTarget).closest("li").remove();
  
    });
  
  });