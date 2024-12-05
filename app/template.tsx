"use client";
import { motion } from "framer-motion";

// export const expand = {
//   initial: {
//     top: 0,
//   },

//   enter: (i) => ({
//     top: "100vh",

//     transition: {
//       duration: 0.4,

//       delay: 0.02 * i - (i / 100) * 0.4,

//       ease: [0.215, 0.61, 0.355, 1],
//     },

//     transitionEnd: { height: "0", top: "0" },
//   }),
// };

// export const opacity = {
//   initial: {
//     opacity: 0.5,
//   },

//   enter: {
//     opacity: 0,
//   },

//   exit: {
//     opacity: 0.5,
//   },
// };

// export default function Template({ children }: { children: React.ReactNode }) {
//   const anim = (variants, custom = null) => {
//     return {
//       initial: "initial",

//       animate: "enter",

//       custom,

//       variants,
//     };
//   };

//   const nbOfColumns = 10;
//   return (
//     <div className="page stairs">
//       <motion.div {...anim(opacity)} className="transition-background" />

//       <div className="transition-container">
//         {[...Array(nbOfColumns)].map((_, i) => {
//           return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
//         })}
//       </div>

//       {children}
//     </div>
//   );
// }

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 20, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}
