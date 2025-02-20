
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

const BookingForm = () => {
  const [date, setDate] = useState<Date>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Booking submitted successfully!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Book AC Service
        </h2>
        <p className="text-gray-500 text-center">
          Schedule your AC service appointment
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="service" className="text-sm font-medium">Service Type</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="repair">AC Repair</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="installation">Installation</SelectItem>
              <SelectItem value="emergency">Emergency Service</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Preferred Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
          <Input 
            id="name" 
            placeholder="Enter your name"
            className="w-full transition-all focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
          <Input 
            id="phone" 
            type="tel" 
            placeholder="Enter phone number"
            className="w-full transition-all focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address" className="text-sm font-medium">Address</Label>
          <Input 
            id="address" 
            placeholder="Enter your address"
            className="w-full transition-all focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes" className="text-sm font-medium">Additional Notes</Label>
          <Input 
            id="notes" 
            placeholder="Any specific requirements?"
            className="w-full transition-all focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Book Appointment"}
      </Button>
    </form>
  );
};

export default BookingForm;
