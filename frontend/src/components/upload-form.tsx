import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UploadForm() {
  return (
    <form className="space-y-4">
      <h4 className="text-black">Upload learning material</h4>
      <Input id="file" type="file" className="" />
      <Button>Upload File</Button>
    </form>
  );
}
