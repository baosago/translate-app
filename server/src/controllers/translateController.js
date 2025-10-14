// server/src/controllers/translateController.js
export async function translateText(req, res) {
    const { text, targetLang } = req.body;
    if (!text || !targetLang) {
      return res.status(400).json({ error: 'text and targetLang required' });
    }
    // mock response (temporary)
    const translated = `${text} (mock translated to ${targetLang})`;
    return res.json({ translated });
  }