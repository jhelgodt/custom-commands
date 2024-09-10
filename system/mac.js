// Function to press Alt + Space, wait for 10 seconds, then press Alt + Space again
serenade.global().command("pause listening", async (api) => {
  // Press Alt + Space to pause listening
  await api.pressKey("space", ["alt"]);
  console.log("Listening paused");

  // Wait for 10 seconds
  await new Promise((resolve) => setTimeout(resolve, 15000));

  // Press Alt + Space again to resume listening
  await api.pressKey("space", ["alt"]);
  console.log("Listening resumed");
});

// Existing commands
serenade.global().command("next desktop", async (api) => {
  await api.pressKey("right", ["control"]);
});

serenade.global().command("previous desktop", async (api) => {
  await api.pressKey("left", ["control"]);
});

serenade.global().command("spotlight <%text%>", async (api, matches) => {
  await api.pressKey("space", ["command"]);
  await api.typeText(matches.text);
});

// Skript för att öppna Mission Control med längre tangenttryckning
serenade.global().command("open mission control", async (api) => {
  await api.pressAndHoldKey("control");
  await api.pressKey("up");
  await api.releaseKey("control");
});
