import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/chat-logo.png";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={logo} alt={""} width={100} height={100} />
    </Link>
  );
}
