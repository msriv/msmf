import Link from "next/link"

const PhilanthropyNavbar = () => {

  return (
    <div className="flex items-center justify-between mx-auto py-5 px-10">
      <div>
        <img
          src="/MSMF_logo.png"
          alt="MSMF Logo"
          className=" w-4/12"
        />
      </div>
      <div className="flex space-x-16">
        <Link href="#">
          <span className="text-lg text-chambray-500">Programs</span>
        </Link>
        <Link href="#">
          <span className="text-lg text-chambray-500">Impact</span>
        </Link>
        <Link href="#">
          <span className="text-lg text-chambray-500">People</span>
        </Link>
        <Link href="#">
          <span className="text-lg text-chambray-500">Support Us</span>
        </Link>
        <Link href="#">
          <span className="text-lg text-chambray-500">Donate</span>
        </Link>
      </div>
    </div>
    
  )
}

export default PhilanthropyNavbar