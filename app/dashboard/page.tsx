import LocaleSwitcher from "@/app/dashboard/locale-switcher";
import Link from "next/link";

export default function Dashboard(){
    return (
        <div>
            <LocaleSwitcher></LocaleSwitcher>
            <Link href="/list">list</Link>
        </div>
    )
}
