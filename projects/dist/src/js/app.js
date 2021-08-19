opentab = (event, opentab) => {
    const i
    const tabcontent
    const tablinks
    tabcontent = document.getElementsByClassName("main__content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("main__tabslinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(opentab).style.display = "block";
    event.currentTarget.className += " active";
  }
