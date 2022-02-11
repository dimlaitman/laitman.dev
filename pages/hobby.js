import Link from "next/link";
import MapChart from "../components/MapChart";

export default function Hobby() {
  return (
    <div className="mx-auto px-2 max-w-5xl cursor-pointer">
    <span className="flex justify-center text-md  mt-3 mb-3">
    Европа: 20/44 | Азия: 30/50 | Африка: 1/54
  </span>
      <MapChart/>
    </div>
  );
}
