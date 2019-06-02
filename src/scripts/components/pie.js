function pie() {
  const pie = document.querySelector(".content__pie");
  const close = document.querySelectorAll(".reality-top__back");
  const services = document.querySelectorAll(".content__pie-piece");
  const tops = document.querySelectorAll(".reality-top");

  function isActive() {
    if (pie.classList.contains("active")) {
      return true;
    } else {
      return false;
    }
  }

  function closeAll() {
    pie.classList.remove("active");
    services.forEach((item, i, arr) => {
      item.classList.remove("active");
    });
    tops.forEach((item, i, arr) => {
      item.classList.remove("active");
    });
  };

  function selectService(service) {
    let list = service.getAttribute(`data-service`);
    list = document.querySelector(`.reality-top_${list}`);
    if (isActive()) {
      closeAll();
    } else {
      service.classList.add("active");
      pie.classList.add("active");
      list.classList.add("active");
    }
  }


  services.forEach((item, i, arr) => {
    item.addEventListener("click", () => {
      selectService(item)
    });
  });

  close.forEach((item, i, arr) => {
    item.addEventListener("click", () => {
      closeAll();
    });
  });

  (function actualDate() {
    function formatDate(date) {

      var dd = date.getDate();
      if (dd < 10) dd = '0' + dd;

      var mm = date.getMonth() + 1;
      if (mm < 10) mm = '0' + mm;

      var yy = date.getFullYear() % 100;
      if (yy < 10) yy = '0' + yy;

      return dd + '.' + mm + '.' + yy;
    }

    const d = new Date();

    const datePlaces = document.querySelectorAll(".reality-top__date");

    datePlaces.forEach((item, i, arr) => {
      item.textContent = formatDate(d);
    })
  })();
}

module.exports = pie;