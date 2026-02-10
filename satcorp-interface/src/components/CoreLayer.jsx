import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CoreLayer = ({ onConnect }) => {
  const [isNearCore, setIsNearCore] = useState(false)
  const [connecting, setConnecting] = useState(false)

  const handleMouseMove = (e) => {
    const coreElement = document.getElementById('core')
    if (!coreElement) return

    const rect = coreElement.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    )

    setIsNearCore(distance < 150)
  }

  const handleClick = () => {
    if (isNearCore) {
      setConnecting(true)
      setTimeout(() => {
        onConnect()
      }, 2000)
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-deep-void">
      <div className="relative">
        {/* Core Element */}
        <motion.div
          id="core"
          className={`w-48 h-48 rounded-full ${
            isNearCore ? 'bg-cyan-structure' : 'bg-indigo-atmosphere'
          } flex items-center justify-center cursor-pointer relative`}
          animate={{
            scale: connecting ? 1.2 : isNearCore ? 1.1 : 1,
            boxShadow: isNearCore 
              ? '0 0 50px rgba(102, 252, 241, 0.8)' 
              : '0 0 20px rgba(102, 252, 241, 0.3)'
          }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
        >
          {/* Pulsing Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-cyan-structure opacity-30"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Connection Animation */}
          {connecting && (
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-gold-signal"
              animate={{ 
                scale: [1, 1.5, 2],
                opacity: [1, 0.7, 0]
              }}
              transition={{ duration: 2 }}
            />
          )}
        </motion.div>

        {/* Text Overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-cyan-structure mb-4 tracking-widest">
            SATCORP
          </h1>
          <p className="text-violet-intelligence text-center text-sm leading-relaxed">
            Concierge System Architect<br />
            Designing Operational Reality
          </p>
        </motion.div>
      </div>

      {/* Connection Status */}
      {connecting && (
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-gold-signal text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          INITIATING CONNECTION...
        </motion.div>
      )}
    </div>
  )
}

export default CoreLayer
