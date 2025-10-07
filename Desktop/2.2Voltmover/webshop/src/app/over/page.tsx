import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Ons - Duurzame Elektrische Mobiliteit",
  description: "Wij geloven in slimme, duurzame mobiliteit. Met e-bikes, e-steps en kwalitatieve onderdelen helpen we iedereen vooruit. Ontdek onze missie en visie.",
  openGraph: {
    title: "Over Ons - Duurzame Elektrische Mobiliteit | Emovement",
    description: "Wij geloven in slimme, duurzame mobiliteit. Met e-bikes, e-steps en kwalitatieve onderdelen helpen we iedereen vooruit.",
  },
};

export default function OverPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Over Ons" }]} />
      <div className="space-y-4">
        <h1 className="text-3xl">Over Emovement</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Wij geloven in slimme, duurzame mobiliteit. Met e-bikes, e-steps en
          kwalitatieve onderdelen helpen we iedereen vooruit.
        </p>
      </div>
    </>
  );
}



