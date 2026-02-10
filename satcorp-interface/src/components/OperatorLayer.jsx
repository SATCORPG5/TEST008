import React from 'react'
import { motion } from 'framer-motion'

const OperatorLayer = () => {
  const operatorData = {
    Operator: "ANU",
    Function: "Concierge / Architect / Creative Operator",
    Mode: "Adaptive",
    Method: "Systems over Graphics",
    Philosophy: "Precision Before Aesthetics"
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-deep-void p-8">
      <motion.div
        className="glass-panel p-8 max-w-md w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="border-b border-cyan-structure pb-4 mb-6">
          <h2 className="text-2xl font-bold text-cyan-structure tracking-wider">
            OPERATOR IDENTITY
          </h2>
        </div>
        
        <div className="space-y-4">
          {Object.entries(operatorData).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="flex"
            >
              <span className="text-cyan-structure font-medium w-32">
                {key}:
              </span>
              <span className="text-violet-intelligence flex-1">
                {value}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default OperatorLayer
