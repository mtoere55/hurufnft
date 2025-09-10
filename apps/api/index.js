import express from "express";

const app = express();
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ ok: true }));

// MVP örnek uçlar (şimdilik stub)
app.get("/api/v1/verses/:surah/:ayah", (req, res) => {
  const { surah, ayah } = req.params;
  const { lang = "tr" } = req.query;
  res.json({
    surah: Number(surah),
    ayah: Number(ayah),
    lang,
    text_ar_clean: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    huruf_meal: "Örnek meal (stub)."
  });
});

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`API running on http://localhost:${port}`));
