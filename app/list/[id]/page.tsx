import ids from "@/app/list/ids";

export const dynamicParams = false

export default function Item({ params }: { params: { id: string } }) {
    return <div>My Post: {params.id}</div>
}


export function generateStaticParams() {
    return ids
}
