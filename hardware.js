// Scroll wheel mapping
window.addEventListener("scrollUp", () => {
  const iframe = document.getElementById('tiktokFrame');
  try { iframe.contentWindow.scrollBy(0, -50); } catch(e) {}
});
window.addEventListener("scrollDown", () => {
  const iframe = document.getElementById('tiktokFrame');
  try { iframe.contentWindow.scrollBy(0, 50); } catch(e) {}
});

// Side button acts as click
window.addEventListener("sideClick", () => {
  const iframe = document.getElementById('tiktokFrame');
  try {
    const active = iframe.contentWindow.document.activeElement;
    if (active) active.click();
  } catch(e) {}
});

// Tilt scrolling with accelerometer
if (window.creationSensors && window.creationSensors.accelerometer) {
  window.creationSensors.accelerometer.start((data) => {
    const iframe = document.getElementById('tiktokFrame');
    try {
      if (data.y > 0.1) iframe.contentWindow.scrollBy(0, 5);
      if (data.y < -0.1) iframe.contentWindow.scrollBy(0, -5);
    } catch(e) {}
  }, { frequency: 60 });
}

// PC testing (optioneel)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') window.dispatchEvent(new Event('scrollUp'));
  if (e.key === 'ArrowDown') window.dispatchEvent(new Event('scrollDown'));
  if (e.key === 'Enter') window.dispatchEvent(new Event('sideClick'));
});
