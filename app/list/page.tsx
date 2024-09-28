import Link from "next/link";
import ids from "@/app/list/ids";

export default function List() {
    return (
        <div className="flex gap-x-2">
            {
                ids.map(i => (
                    <Link href={`/list/${i.id}`} key={i.id}>{i.id}</Link>
                ))
            }
        </div>
    )
}
