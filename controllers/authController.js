exports.loginBumbleBee = (req, res) => {
  // Felhasználónév: bumblebee
  const felhnev = "bumblebee";
  // Jelszó: IloveHon3y
  const megadottJelszo = "IloveHon3y";

  const { nev, jelszo } = req.body;

  if (!nev || !jelszo || nev !== felhnev || jelszo !== megadottJelszo) {
    res.status(403).json({
      error: "unauthorized",
    });
  }

  res.status(200).json({
    authenticated: "true",
  });
};
