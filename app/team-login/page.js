import PortalCard from "@/components/PortalCard";

export const metadata = {
  title: "Team Login"
};

export default function TeamLoginPage() {
  return (
    <PortalCard
      role="Internal team only"
      title="Team Studio Login"
      description="This area is for approved B Socio team members only. Team members should use the private studio portal for internal work."
      internal
    />
  );
}
