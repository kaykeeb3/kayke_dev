import CustomLink from "./link";
interface JobItemProps {
  jobTitle: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate: string;
  linkTo: string;
}

function JobItem({
  jobTitle,
  companyName,
  location,
  startDate,
  endDate,
  linkTo,
}: JobItemProps) {
  return (
    <div className="flex-1 mb-4">
      <h3 className="font-bold text-left text-zinc-200 text-xl mb-2">
        {jobTitle}
      </h3>

      <CustomLink to={linkTo}>
        <span className="underline">{companyName}</span> • {location}
      </CustomLink>

      <p className="mt-2 text-zinc-400 font-light text-base">
        {startDate} – {endDate}
      </p>
    </div>
  );
}

export default JobItem;
