import generateContent from "../services/ai.service.js";

export const getReview = async (req, res) => {
  const prompt = req.body.prompt;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });
  const response = await generateContent(prompt);
  res.send(response);
};
