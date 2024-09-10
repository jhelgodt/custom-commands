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
