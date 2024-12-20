import {
  IconName,
  IconPrefix,
  library,
} from "@fortawesome/fontawesome-svg-core";
import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEarthAmerica,
  faLink,
  faArrowUpRightFromSquare,
  faTable,
  faChevronRight,
  faUsers,
  faFaceGrin,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import {
  faShieldCheck,
  faFileContract,
  faScaleBalanced,
  faBuildingShield,
  faUserShield,
  faPersonSign,
  faPersonCircleMinus,
  faUserMagnifyingGlass,
  faMonitorWaveform,
  faBinaryLock,
  faLaptopMobile,
  faServer,
  faCheckToSlot,
  faCameraCctv,
  faLightbulbOn,
  faFilterCircleDollar,
  faRobotAstromech,
  faCartShopping,
  faMagnifyingGlass,
  faMessageExclamation,
  faSliders,
  faClapperboardPlay,
  faMessageSmile,
  faCartShoppingFast,
  faAngleUp,
  faAngleDown,
  faSquareKanban,
  faTags,
  faTrophyStar,
  faArrowUpRightDots,
  faThumbsUp,
  faArrowRotateRight,
  faUserSecret,
  faMessageCheck,
  faMobile,
  faLaptop,
  faXmark,
  faBuildingColumns,
  faNewspaper,
  faBolt,
  faTag,
  faCode,
  faFaceDiagonalMouth,
  faPersonWalking,
  faLayerGroup,
  faCircleQuestion,
  faCloud,
  faPrintMagnifyingGlass,
  faAlbumCollection,
  faCalendarExclamation,
  faBullseyePointer,
  faEyes,
  faSparkles,
  faBadgeCheck,
  faMagnifyingGlassDollar,
  faDumbbell,
  faPersonWalkingArrowLoopLeft,
  faCrosshairsSimple,
  faCalendarCircleUser,
  faMagnifyingGlassChart,
  faTicketAirline,
  faCircleCheck,
  faFlask,
  faPersonWalkingLuggage,
  faChartNetwork,
  faHandshakeSimple,
  faAward,
  faChartMixed,
  faQuoteLeft,
  faDisplayChartUpCircleDollar,
  faSackDollar,
  faCommentSmile,
  faHeadSideBrain,
  faCaretRight,
  faBook,
  faGaugeMax,
  faUserShakespeare,
  faHandshakeAngle,
  faHeadset,
  faToolbox,
  faBagsShopping,
  faBookOpen,
  faDisplayChartUp,
  faScreenUsers,
  faChartBar,
  faHotel,
  faGem,
  faGamepadModern,
  faSitemap,
  faNotesMedical,
  faFaceLaughSquint,
  faDatabase,
  faBars,
  faTriangleExclamation,
  faBuilding,
  faEnvelopeOpenText,
  faHandsHoldingDollar,
  faMicrochipAi,
  faFileShield,
  faFaceSadSweat,
  faFaceTired,
  faFaceSpiralEyes,
  faClock,
} from "@fortawesome/pro-regular-svg-icons";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
export { type IconName } from "@fortawesome/fontawesome-svg-core";

// import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(
  faTwitter,
  faLinkedin,
  faInstagram,
  faLink,
  faFacebook,
  faYoutube,
  faTiktok,
  faArrowUpRightFromSquare,
  faTable,
  faEarthAmerica,
  faChevronRight,
  faAngleUp,
  faShieldCheck,
  faFileContract,
  faScaleBalanced,
  faBuildingShield,
  faUserShield,
  faPersonCircleMinus,
  faPersonSign,
  faUserMagnifyingGlass,
  faMonitorWaveform,
  faBinaryLock,
  faLaptopMobile,
  faServer,
  faCheckToSlot,
  faCameraCctv,
  faUsers,
  faFaceGrin,
  faBolt,
  faFlag,
  faCartShopping,
  faLightbulbOn,
  faFilterCircleDollar,
  faRobotAstromech,
  faCartShopping,
  faMagnifyingGlass,
  faMessageExclamation,
  faSliders,
  faClapperboardPlay,
  faMessageSmile,
  faCartShoppingFast,
  faAngleDown,
  faSquareKanban,
  faTags,
  faTrophyStar,
  faArrowUpRightDots,
  faThumbsUp,
  faArrowRotateRight,
  faUserSecret,
  faMessageCheck,
  faMobile,
  faLaptop,
  faXmark,
  faBuildingColumns,
  faNewspaper,
  faTag,
  faCode,
  faFaceDiagonalMouth,
  faPersonWalking,
  faLayerGroup,
  faCircleQuestion,
  faCloud,
  faPrintMagnifyingGlass,
  faAlbumCollection,
  faCalendarExclamation,
  faBullseyePointer,
  faEyes,
  faSparkles,
  faBadgeCheck,
  faMagnifyingGlassDollar,
  faDumbbell,
  faPersonWalkingArrowLoopLeft,
  faCrosshairsSimple,
  faCalendarCircleUser,
  faMagnifyingGlassChart,
  faTicketAirline,
  faCircleCheck,
  faCrosshairsSimple,
  faFlask,
  faPersonWalkingLuggage,
  faChartNetwork,
  faHandshakeSimple,
  faAward,
  faChartMixed,
  faQuoteLeft,
  faDisplayChartUpCircleDollar,
  faSackDollar,
  faCommentSmile,
  faHeadSideBrain,
  faCaretRight,
  faBook,
  faGaugeMax,
  faUserShakespeare,
  faHandshakeAngle,
  faHeadset,
  faToolbox,
  faBagsShopping,
  faBookOpen,
  faDisplayChartUp,
  faScreenUsers,
  faChartBar,
  faHotel,
  faGem,
  faGamepadModern,
  faSitemap,
  faNotesMedical,
  faFaceLaughSquint,
  faDatabase,
  faBars,
  faTriangleExclamation,
  faBuilding,
  faEnvelopeOpenText,
  faHandsHoldingDollar,
  faMicrochipAi,
  faFileShield,
  faFaceSadSweat,
  faFaceTired,
  faFaceSpiralEyes,
  faClock
);

interface IconProps {
  name: IconName;
  prefix?: IconPrefix;
}

const Icon: React.FC<IconProps & Omit<FontAwesomeIconProps, "icon">> = ({
  name,
  prefix = "far",
  ...props
}) => {
  return <FontAwesomeIcon icon={[prefix, name]} {...props} />;
};
export default Icon;
