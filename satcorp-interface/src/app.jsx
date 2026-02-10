import React, { useState, useEffect } from 'react'
import CoreLayer from './components/CoreLayer'
import OperatorLayer from './components/OperatorLayer'
import OperationsNetwork from './components/OperationsNetwork'
import CapabilityMatrix from './components/CapabilityMatrix'
import ProcessSequence from './components/ProcessSequence'
import ActiveOutputs from './components/ActiveOutputs'
import ContactTerminal from './components/ContactTerminal'
import { motion } from 'framer-motion'

function App() {
  const [currentLayer, setCurrentLayer] = useState(0)
  const [connected, setConnected] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const layers = [
    <CoreLayer key="core" onConnect={() => setConnected(true)} />,
    connected && <OperatorLayer key="operator" />,
    connected && <OperationsNetwork key="network" />,
    connected && <CapabilityMatrix key="capability" />,
    connected && <ProcessSequence key="process" />,
    connected && <ActiveOutputs key="outputs" />,
    connected && <ContactTerminal key="contact" />
  ].filter(Boolean)

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Custom Cursor */}
      <div 
        className="cursor-dot"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4
        }}
      />
      <div 
        className="cursor-ring"
        style={{
          left: mousePosition.x - 15,
          top: mousePosition.y - 15
        }}
      />

      {/* Layers */}
      <div className="relative z-10">
        {layers.map((layer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: index <= currentLayer ? 1 : 0, y: index <= currentLayer ? 0 : 20 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="min-h-screen flex items-center justify-center"
          >
            {layer}
          </motion.div>
        ))}
      </div>

      {/* Progress Indicator */}
      {connected && (
        <div className="fixed bottom-8 right-8 flex space-x-2">
          {layers.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index <= currentLayer 
                  ? 'bg-cyan-structure' 
                  : 'bg-indigo-atmosphere'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
