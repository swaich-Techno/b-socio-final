import PortalCard from "@/components/PortalCard";

export const metadata = {
  title: "Client Login"
};

export default function ClientLoginPage() {
  return (
    <PortalCard
      role="Client Portal"
      title="Client project access"
      description="B Socio clients can use this portal structure to view project updates, approvals, files, requirements, and messages. Contact B Socio to activate your client access."
    />
  );
}
