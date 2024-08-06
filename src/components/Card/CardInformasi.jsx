import React from 'react';
import { motion } from 'framer-motion';

const InformasiCard = ({ title, imgSrc }) => {
    return (
        <motion.div
            className="card card-compact bg-slate-50 w-96 shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <figure>
                <img src={imgSrc} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title">{title}</h2>
            </div>
        </motion.div>
    );
}

export default InformasiCard;
