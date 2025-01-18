export default function handler(req, res) {
  if (req.method === "GET") {
    const jobs = [
      { id: 1, title: "Frontend Developer", location: "Remote" },
      { id: 2, title: "Backend Developer", location: "Lagos, Nigeria" },
    ];
    res.status(200).json(jobs);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
