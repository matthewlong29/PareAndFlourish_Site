/********************************************************
toggle panels
********************************************************/

$(document).ready(() => {
  const panels = document.querySelectorAll('.panel');
  const innerPanels = document.querySelectorAll('.panel .panelInner');
  const outerPanels = document.querySelectorAll('.panel .panelOuter');

  // function to hide all panels (inner)
  const hideAllPanels = (j) => {
    for (j = 0; j < panels.length; j++) {
      innerPanels[j].hidden = true;
    }
  }

  for (let i = 0; i < panels.length; i++) {
    innerPanels[i].hidden = true;
    innerPanels[0].hidden = false;

    outerPanels[i].onclick = (e) => {
      if (e.target.nextElementSibling.hidden) {
        if (panels.length == 3) {
          hideAllPanels(i);
        }
        e.target.nextElementSibling.hidden = false;
      } else if (!e.target.nextElementSibling.hidden) {
        if (panels.length == 3) {
          hideAllPanels(i);
        }
        e.target.nextElementSibling.hidden = true;
      }
    }
  }
});