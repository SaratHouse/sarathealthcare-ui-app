import CheckboxField from "../reuseables/checkbox";
import InputField from "../reuseables/input";

export const JobDetails = ({ formData, handleChange }: any) => (
  <div>
    <h2 className="text-xl font-bold text-[#1663a3] mb-6">Job Details</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField
        title="Position Applied For"
        type="text"
        value={formData.jobDetails.positionAppliedFor}
        onChange={(e) => handleChange('jobDetails.positionAppliedFor', e.target.value)}
        isRequired
      />
      
      <div className="space-y-3">
        <div className="font-semibold tracking-wide">
          Please indicate preferred working arrangements
        </div>
        <div className="flex flex-wrap gap-4">
          <CheckboxField
            label="Full-time"
            checked={formData.jobDetails.preferredWorkingArrangements.fullTime}
            onChange={(checked) => handleChange('jobDetails.preferredWorkingArrangements.fullTime', checked)}
            />
          <CheckboxField
            label="Part-time"
            checked={formData.jobDetails.preferredWorkingArrangements.partTime}
            onChange={(checked) => handleChange('jobDetails.preferredWorkingArrangements.partTime', checked)}
            />
          <CheckboxField
            label="Job share"
            checked={formData.jobDetails.preferredWorkingArrangements.jobShare}
            onChange={(checked) => handleChange('jobDetails.preferredWorkingArrangements.jobShare', checked)}
          />
        </div>
      </div>
      
      <InputField
        title="Location"
        type="text"
        value={formData.jobDetails.location}
        onChange={(e) => handleChange('jobDetails.location', e.target.value)}
        isRequired
      />
      
      <InputField
        title="How did you hear about this vacancy?"
        placeholder="Please state e.g. Indeed, Facebook etc."
        type="text"
        value={formData.jobDetails.howDidYouHear}
        onChange={(e) => handleChange('jobDetails.howDidYouHear', e.target.value)}
        isRequired
      />
    </div>
  </div>
);