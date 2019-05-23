function pie () {
    const pie = document.querySelector(".content__pie");

    function isActive() {
      if(pie.classList.contains("active")) {
        return true;
      } else {
        return false;
      }
    }
    
    function selectService (service) {
      let list = service.getAttribute(`data-service`);
      list = document.querySelector(`.reality-top_${list}`);
      if(isActive()){
        pie.classList.remove("active");
        service.classList.remove("active");
        list.classList.remove("active");
      } else {
        service.classList.add("active");
        pie.classList.add("active");
        list.classList.add("active");
      }
    }

    let services = document.querySelectorAll(".content__pie-piece");

    services.forEach((item, i, arr)=>{
      item.addEventListener("click", ()=>{selectService(item)});
    })
}

module.exports = pie;