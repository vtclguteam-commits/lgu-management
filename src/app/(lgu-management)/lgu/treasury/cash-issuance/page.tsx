import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Page() {
    redirect("/lgu/treasury/cash-issuance/preparation");
}
