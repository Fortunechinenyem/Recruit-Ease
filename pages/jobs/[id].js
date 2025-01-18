import Button from "@/app/components/Button";
import { useRouter } from "next/router";

export default function JobDetail() {
  const router = useRouter();
  const { id } = router.query;

  const job = {
    id,
    title: "Frontend Developer",
    location: "Remote",
    description: "Develop web applications using React.",
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-600 mb-4">Location: {job.location}</p>
      <p className="mb-6">{job.description}</p>
      <Button type="submit" className="w-full">
        Apply Now
      </Button>
    </div>
  );
}
