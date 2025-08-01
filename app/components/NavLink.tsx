import Link from "next/link"

type typeDef = {
    reference:string,
    title:string
};

const NavLink = ({ reference, title}: typeDef) => {
    return (
        <Link href={reference} className='block py-2 pl-3 pr-4 text-amber-50 sm:text-xl rounded md:p-0 hover:text-teal-200'>
            {title}
        </Link>
    );
};

export default NavLink;