import PortalCard from "@/components/PortalCard";

export const metadata = {
  title: "Super Admin Login"
};

export default function SuperAdminLoginPage() {
  return (
    <PortalCard
      role="Super admin only"
      title="Private admin access"
      description="Super admin access is private and should be used only through the internal B Socio Studio portal."
      internal
    />
  );
}
