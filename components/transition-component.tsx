"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionTransitionProps = {
    children: ReactNode;
    position?: "left" | "right" | "top" | "bottom";
    className?: string;
};

const positionVariants = {
    left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    top: { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
    bottom: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
} as const;

const MotionTransition = ({
    children,
    position = "right",
    className = "",
}: MotionTransitionProps) => {
    const variants = positionVariants[position];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MotionTransition;