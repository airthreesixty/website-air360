import { motion } from "framer-motion";
import usePreviousPageUrl from "@/lib/state/use-previous-page-url-store";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-common-types";

const BackButton = () => {
  const { prevUrl } = usePreviousPageUrl();
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(prevUrl || "/")}
      className="flex items-center gap-3 w-[125px] cursor-pointer group"
    >
      <FontAwesomeIcon
        className="text-sm text-gray-450 transition-colors group-hover:text-gray-900"
        icon={["far", "chevron-left" as IconName]}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-gray-450 transition-colors group-hover:text-gray-900">
          Back
        </span>
      </motion.div>
    </div>
  );
};

export default BackButton;
